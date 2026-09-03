from __future__ import annotations

import json
import os
import sqlite3
from datetime import date, timedelta
from pathlib import Path
from typing import Any, TypedDict

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

try:
    from langgraph.graph import END, START, StateGraph
except ImportError:
    END = START = StateGraph = None


ROOT = Path(__file__).resolve().parents[1]
RESOURCE_ROOT = Path(os.getenv("OLDCARE_RESOURCE_ROOT", "E:/oldcare-resources"))
DATA_ROOT = RESOURCE_ROOT / "data"
DATA_ROOT.mkdir(parents=True, exist_ok=True)
DB_PATH = DATA_ROOT / "oldcare.db"
KNOWLEDGE_PATH = ROOT / "knowledge_base.json"

app = FastAPI(title="旧物新生 API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    id: str | None = None
    name: str = Field(min_length=1, max_length=80)
    category: str
    age: str = "3"
    scene: str = "客厅"
    notes: str = ""
    score: int = 80
    issue: str = ""
    nextCare: str | None = None
    image: str = ""


class TaskUpdate(BaseModel):
    done: bool


class AnalysisInput(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    category: str
    age: str = "3"
    scene: str = "客厅"
    notes: str = ""


class AgentState(TypedDict, total=False):
    input: dict[str, Any]
    evidence: list[dict[str, Any]]
    recognition: dict[str, Any]
    diagnosis: dict[str, Any]
    plan: list[str]
    materials: list[str]
    schedule: dict[str, Any]
    report: dict[str, Any]


CATEGORY = {
    "wood": ("木质家具", 86, ["超细纤维布", "木质护理油", "一次性手套"]),
    "leather": ("皮具", 78, ["软布", "皮革护理剂", "防尘袋"]),
    "metal": ("五金金属", 74, ["软海绵", "温和清洁液", "防锈剂"]),
    "fabric": ("布艺软装", 83, ["软毛刷", "温和清洁剂", "吸水毛巾"]),
    "ceramic": ("陶瓷卫浴", 91, ["软海绵", "中性清洁剂", "干燥布"]),
    "appliance": ("小家电", 69, ["软毛刷", "干燥布", "绝缘手套"]),
}

PLANS = {
    "wood": ["用干燥软布沿木纹清除灰尘。", "在隐蔽处小范围测试木质护理油。", "薄涂护理油，静置20分钟后擦去多余油分。", "保持通风，7天后复查裂缝是否扩大。"],
    "leather": ["用软布轻轻除尘，避免来回用力摩擦。", "在包底隐蔽处测试皮革护理剂。", "少量分区涂抹，静置吸收后擦匀。", "放在阴凉通风处自然干燥，避免暴晒。"],
    "metal": ["关闭水源并用软布擦干表面。", "用温和清洁液处理水垢，不使用强酸。", "完全擦干后在转动部位薄涂防锈剂。", "7天后复查旋钮是否仍有卡顿。"],
    "fabric": ["查看洗护标签并使用软毛刷除尘。", "在不明显处测试温和清洁剂。", "局部点擦污渍，避免浸泡和大面积打湿。", "保持通风，完全干燥后再使用。"],
    "ceramic": ["用软海绵和温和清洁剂清洁釉面。", "擦干后检查裂纹、渗水和松动。", "发现裂纹扩大时停止使用并联系维修。", "每月复查密封和固定状态。"],
    "appliance": ["先断开电源，观察焦糊味、冒烟或异常发热。", "仅清洁外部进风口和表面灰尘。", "不要拆机、改线或使用液体冲洗。", "若异常持续，停止使用并联系专业人员。"],
}


def db() -> sqlite3.Connection:
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def init_db() -> None:
    with db() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS items (
              id TEXT PRIMARY KEY, name TEXT NOT NULL, category TEXT NOT NULL,
              age TEXT NOT NULL, scene TEXT NOT NULL, notes TEXT NOT NULL,
              score INTEGER NOT NULL, issue TEXT NOT NULL, next_care TEXT, image TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS tasks (
              id TEXT PRIMARY KEY, item_id TEXT NOT NULL, title TEXT NOT NULL,
              date TEXT NOT NULL, done INTEGER NOT NULL DEFAULT 0
            );
            CREATE TABLE IF NOT EXISTS care_records (
              id INTEGER PRIMARY KEY AUTOINCREMENT, item_id TEXT NOT NULL,
              action TEXT NOT NULL, created_at TEXT NOT NULL
            );
            """
        )
        if connection.execute("SELECT COUNT(*) FROM items").fetchone()[0] == 0:
            today = date.today()
            seed = [
                ("item-wood", "卧室实木柜", "wood", "8", "卧室", "表面有细小裂缝，雨天后更明显", 86, "轻微干裂 · 受潮波动", (today + timedelta(days=4)).isoformat(), ""),
                ("item-leather", "棕色通勤皮包", "leather", "3", "玄关", "提手边缘有些发干", 78, "局部干燥 · 轻微磨损", (today - timedelta(days=2)).isoformat(), ""),
                ("item-metal", "厨房水龙头", "metal", "5", "厨房", "底座有水垢，旋钮偶尔卡顿", 74, "氧化水垢 · 轻微卡顿", (today + timedelta(days=11)).isoformat(), ""),
                ("item-fabric", "客厅布艺单椅", "fabric", "4", "客厅", "坐垫积灰，暂无明显异味", 83, "日常积尘", (today + timedelta(days=20)).isoformat(), ""),
            ]
            connection.executemany("INSERT INTO items VALUES (?,?,?,?,?,?,?,?,?,?)", seed)
            tasks = [
                ("task-1", "item-leather", "给皮包做一次补脂护理", (today - timedelta(days=2)).isoformat(), 0),
                ("task-2", "item-wood", "检查实木柜裂缝变化", (today + timedelta(days=4)).isoformat(), 0),
                ("task-3", "item-metal", "清洁水龙头底座并薄涂防锈剂", (today + timedelta(days=11)).isoformat(), 0),
            ]
            connection.executemany("INSERT INTO tasks VALUES (?,?,?,?,?)", tasks)


def rows_to_dict(rows: list[sqlite3.Row]) -> list[dict[str, Any]]:
    return [dict(row) for row in rows]


def knowledge() -> list[dict[str, Any]]:
    return json.loads(KNOWLEDGE_PATH.read_text(encoding="utf-8"))


def retrieve(query: str, category: str) -> list[dict[str, Any]]:
    terms = set(query.lower().split()) | {category}
    scored = []
    for entry in knowledge():
        haystack = " ".join([entry["title"], entry["content"], *entry["keywords"]]).lower()
        score = sum(1 for term in terms if term and term in haystack)
        if entry["category"] == category:
            score += 3
        if score:
            scored.append((score, entry))
    return [entry for _, entry in sorted(scored, key=lambda pair: pair[0], reverse=True)[:5]]


def recognition_agent(state: AgentState) -> AgentState:
    data = state["input"]
    label, score, _ = CATEGORY.get(data["category"], CATEGORY["wood"])
    return {"recognition": {"category": data["category"], "categoryLabel": label, "confidence": "86%", "score": score}}


def diagnosis_agent(state: AgentState) -> AgentState:
    data = state["input"]
    entry = state["evidence"][0] if state["evidence"] else {}
    high_risk = data["category"] == "appliance" and any(word in data["notes"] for word in ["焦糊", "冒烟", "漏电", "异常发热"])
    return {"diagnosis": {"risk": "高风险" if high_risk else entry.get("risk", "低风险"), "issue": entry.get("title", "需要进一步观察"), "cause": entry.get("content", "建议结合照片和用户描述复查。")}}


def plan_agent(state: AgentState) -> AgentState:
    category = state["input"]["category"]
    return {"plan": PLANS.get(category, PLANS["wood"])}


def tool_agent(state: AgentState) -> AgentState:
    return {"materials": CATEGORY.get(state["input"]["category"], CATEGORY["wood"])[2]}


def schedule_agent(state: AgentState) -> AgentState:
    days = state["evidence"][0].get("cycle_days", 30) if state["evidence"] else 30
    return {"schedule": {"cycleDays": days, "nextCare": (date.today() + timedelta(days=days)).isoformat()}}


def review_agent(state: AgentState) -> AgentState:
    return {"report": {**state["recognition"], **state["diagnosis"], "plans": state["plan"], "materials": state["materials"], **state["schedule"]}}


def run_workflow(data: dict[str, Any]) -> dict[str, Any]:
    evidence = retrieve(f"{data['name']} {data['notes']}", data["category"])
    state: AgentState = {"input": data, "evidence": evidence}
    steps = [recognition_agent, diagnosis_agent, plan_agent, tool_agent, schedule_agent, review_agent]
    if StateGraph is not None:
        graph = StateGraph(AgentState)
        graph.add_node("recognition", recognition_agent)
        graph.add_node("diagnosis", diagnosis_agent)
        graph.add_node("plan", plan_agent)
        graph.add_node("tools", tool_agent)
        graph.add_node("schedule", schedule_agent)
        graph.add_node("review", review_agent)
        graph.add_edge(START, "recognition")
        graph.add_edge("recognition", "diagnosis")
        graph.add_edge("diagnosis", "plan")
        graph.add_edge("plan", "tools")
        graph.add_edge("tools", "schedule")
        graph.add_edge("schedule", "review")
        graph.add_edge("review", END)
        state = graph.compile().invoke(state)
    else:
        for step in steps:
            state.update(step(state))
    return state["report"]


@app.on_event("startup")
def startup() -> None:
    init_db()


@app.get("/api/health")
def health() -> dict[str, Any]:
    return {"status": "ok", "storage": str(DATA_ROOT), "langgraph": StateGraph is not None}


@app.get("/api/dashboard")
def dashboard() -> dict[str, Any]:
    init_db()
    with db() as connection:
        items = rows_to_dict(connection.execute("SELECT * FROM items ORDER BY rowid DESC").fetchall())
        tasks = rows_to_dict(connection.execute("SELECT id, item_id AS itemId, title, date, done FROM tasks ORDER BY date").fetchall())
    for task in tasks:
        task["done"] = bool(task["done"])
    return {"items": items, "tasks": tasks}


@app.post("/api/analyze")
def analyze(payload: AnalysisInput) -> dict[str, Any]:
    return run_workflow(payload.model_dump())


@app.get("/api/knowledge/search")
def search_knowledge(q: str = "", category: str = "") -> dict[str, Any]:
    return {"items": retrieve(q, category) if q or category else knowledge()}


@app.post("/api/items")
def create_item(payload: Item) -> dict[str, Any]:
    item = payload.model_dump()
    item["id"] = item["id"] or f"item-{os.urandom(5).hex()}"
    item["nextCare"] = item["nextCare"] or (date.today() + timedelta(days=30)).isoformat()
    with db() as connection:
        connection.execute("INSERT OR REPLACE INTO items VALUES (?,?,?,?,?,?,?,?,?,?)", (item["id"], item["name"], item["category"], item["age"], item["scene"], item["notes"], item["score"], item["issue"], item["nextCare"], item["image"]))
        connection.execute("INSERT OR IGNORE INTO tasks VALUES (?,?,?,?,?)", (f"task-{os.urandom(5).hex()}", item["id"], f"{item['name']}首次养护复查", item["nextCare"], 0))
    return item


@app.post("/api/tasks/{task_id}/complete")
def complete_task(task_id: str, payload: TaskUpdate) -> dict[str, Any]:
    with db() as connection:
        cursor = connection.execute("UPDATE tasks SET done=? WHERE id=?", (int(payload.done), task_id))
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="task not found")
    return {"id": task_id, "done": payload.done}


@app.post("/api/items/{item_id}/records")
def add_record(item_id: str, action: str = "完成一次养护") -> dict[str, Any]:
    with db() as connection:
        connection.execute("INSERT INTO care_records(item_id, action, created_at) VALUES (?,?,?)", (item_id, action, date.today().isoformat()))
    return {"itemId": item_id, "action": action}


if (ROOT / "index.html").exists():
    app.mount("/", StaticFiles(directory=ROOT, html=True), name="frontend")
