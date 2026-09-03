const STORAGE_KEY = "oldcare-demo-v1";

const CATEGORY_META = {
  wood: { label: "木质家具", icon: "⌂", className: "wood", score: 86 },
  leather: { label: "皮具", icon: "◒", className: "leather", score: 78 },
  metal: { label: "五金金属", icon: "◈", className: "metal", score: 74 },
  fabric: { label: "布艺软装", icon: "▧", className: "fabric", score: 83 },
  ceramic: { label: "陶瓷卫浴", icon: "◉", className: "ceramic", score: 91 },
  appliance: { label: "小家电", icon: "▣", className: "appliance", score: 69 },
};

const AGENTS = [
  ["感知识别", "确认物品与材质", "◌"],
  ["损耗诊断", "分析问题根因", "⌁"],
  ["方案生成", "制定养护步骤", "✦"],
  ["工具匹配", "准备耗材工具", "◇"],
  ["周期管理", "安排复查提醒", "◷"],
  ["复盘优化", "记录效果反馈", "↗"],
];

const KNOWLEDGE = [
  { icon: "⌂", title: "木质家具", text: "木材会随湿度和温度变化收缩膨胀，日常以干布和薄涂护理为主。", rules: ["不要大量清水冲洗", "护理油先在隐蔽处测试"] },
  { icon: "◒", title: "皮具护理", text: "皮革需要少量、分次补充油脂，避免暴晒、酒精和过度摩擦。", rules: ["禁止使用酒精湿巾", "护理后自然阴干"] },
  { icon: "◈", title: "五金防锈", text: "氧化初期可以清洁并薄涂防锈剂，卡顿严重时不要强行拧动。", rules: ["不混用强酸清洁剂", "先断开相关电源"] },
  { icon: "▧", title: "布艺软装", text: "布艺重点是除尘、通风和控制潮湿，污渍处理要先确认面料耐受性。", rules: ["不要直接浸泡", "清洁前先看洗护标签"] },
  { icon: "◉", title: "陶瓷卫浴", text: "釉面适合温和清洁，裂纹、渗水和松动应优先进行安全检查。", rules: ["裂纹扩大时停止使用", "避免硬物敲击釉面"] },
  { icon: "▣", title: "小家电安全", text: "出现焦糊味、冒烟、漏电或异常发热时，立即断电并联系专业人员。", rules: ["不拆机改线", "异常发热禁止继续使用"] },
];

function daysFromNow(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function uid(prefix = "item") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;",
  }[char]));
}

function formatDate(value) {
  if (!value) return "待安排";
  const date = new Date(value);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function relativeDate(value) {
  if (!value) return "";
  const start = new Date(new Date().toDateString());
  const diff = Math.ceil((new Date(value) - start) / 86400000);
  if (diff < 0) return `逾期${Math.abs(diff)}天`;
  if (diff === 0) return "今天";
  if (diff === 1) return "明天";
  return `${diff}天后`;
}

function categoryMeta(category) {
  return CATEGORY_META[category] || CATEGORY_META.wood;
}

function seedState() {
  return {
    items: [
      { id: "item-wood", name: "卧室实木柜", category: "wood", age: "8", scene: "卧室", notes: "表面有细小裂缝，雨天后更明显", score: 86, issue: "轻微干裂 · 受潮波动", nextCare: daysFromNow(4), image: "" },
      { id: "item-leather", name: "棕色通勤皮包", category: "leather", age: "3", scene: "玄关", notes: "提手边缘有些发干", score: 78, issue: "局部干燥 · 轻微磨损", nextCare: daysFromNow(-2), image: "" },
      { id: "item-metal", name: "厨房水龙头", category: "metal", age: "5", scene: "厨房", notes: "底座有水垢，旋钮偶尔卡顿", score: 74, issue: "氧化水垢 · 轻微卡顿", nextCare: daysFromNow(11), image: "" },
      { id: "item-fabric", name: "客厅布艺单椅", category: "fabric", age: "4", scene: "客厅", notes: "坐垫积灰，暂无明显异味", score: 83, issue: "日常积尘", nextCare: daysFromNow(20), image: "" },
    ],
    tasks: [
      { id: "task-1", itemId: "item-leather", title: "给皮包做一次补脂护理", date: daysFromNow(-2), done: false },
      { id: "task-2", itemId: "item-wood", title: "检查实木柜裂缝变化", date: daysFromNow(4), done: false },
      { id: "task-3", itemId: "item-metal", title: "清洁水龙头底座并薄涂防锈剂", date: daysFromNow(11), done: false },
    ],
    lastResult: null,
  };
}

let state = loadState();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || seedState();
  } catch {
    return seedState();
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

async function apiRequest(path, options = {}) {
  try {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options,
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

async function hydrateFromBackend() {
  const data = await apiRequest("/api/dashboard");
  if (!data) return;
  if (Array.isArray(data.items) && data.items.length) state.items = data.items;
  if (Array.isArray(data.tasks)) state.tasks = data.tasks;
  persist();
  renderAll();
}

function setView(view) {
  document.querySelectorAll(".view").forEach((element) => element.classList.toggle("active", element.id === `view-${view}`));
  document.querySelectorAll(".nav-link").forEach((element) => element.classList.toggle("active", element.dataset.view === view));
  const titles = { dashboard: "家庭物品总览", diagnose: "智能诊断实验室", items: "我的物品档案", calendar: "养护日历", knowledge: "养护知识库" };
  document.querySelector("#page-title").textContent = titles[view] || titles.dashboard;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function itemCard(item) {
  const meta = categoryMeta(item.category);
  return `<article class="item-card" data-item-id="${escapeHtml(item.id)}"><div class="item-image ${meta.className}">${item.image ? `<img src="${item.image}" alt="${escapeHtml(item.name)}">` : meta.icon}<span class="health-dot ${item.score < 80 ? "warn" : ""}"></span></div><h3>${escapeHtml(item.name)}</h3><div class="item-meta"><span>${escapeHtml(item.issue || meta.label)}</span><span class="score ${item.score < 80 ? "warn" : ""}">${item.score}分</span></div></article>`;
}

function renderStats() {
  const needs = state.items.filter((item) => item.score < 80).length;
  const done = state.tasks.filter((task) => task.done).length;
  const average = Math.round(state.items.reduce((sum, item) => sum + item.score, 0) / Math.max(1, state.items.length));
  const stats = [["物品总数", state.items.length, "件", "已建立档案"], ["需要关注", needs, "件", needs ? "建议本周处理" : "状态良好"], ["本月已完成", done, "项", "养护任务"], ["家庭健康度", average, "分", average >= 80 ? "比上月提升 6分" : "需要持续关注"]];
  document.querySelector("#stats").innerHTML = stats.map(([label, value, unit, hint]) => `<div class="stat"><div class="stat-top"><span>${label}</span><span>${unit}</span></div><div class="stat-value">${value}</div><div class="stat-hint">${hint}</div></div>`).join("");
  document.querySelector("#open-task-count").textContent = state.tasks.filter((task) => !task.done).length;
  document.querySelector("#notification-count").textContent = state.tasks.filter((task) => !task.done).length;
}

function renderItems() {
  const filter = document.querySelector("#item-filters .active")?.dataset.filter || "all";
  const keyword = (document.querySelector("#item-search")?.value || "").toLowerCase();
  const filtered = state.items.filter((item) => {
    const matchesFilter = filter === "all" || (filter === "needs" ? item.score < 80 : item.score >= 80);
    return matchesFilter && `${item.name}${item.issue}${item.scene}`.toLowerCase().includes(keyword);
  });
  document.querySelector("#featured-items").innerHTML = state.items.slice(0, 3).map(itemCard).join("");
  document.querySelector("#all-items").innerHTML = filtered.length ? filtered.map(itemCard).join("") : `<div class="empty-result"><h3>没有匹配的物品</h3><p>试试换一个关键词，或者录入一件新物品。</p></div>`;
  document.querySelectorAll(".item-card").forEach((card) => card.addEventListener("click", () => openItem(card.dataset.itemId)));
}

function renderTasks() {
  const tasks = state.tasks.filter((task) => !task.done).slice(0, 4);
  const markup = (task) => {
    const item = state.items.find((candidate) => candidate.id === task.itemId);
    return `<div class="task"><button class="task-check ${task.done ? "done" : ""}" data-task-id="${task.id}" aria-label="完成任务">${task.done ? "✓" : ""}</button><div><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(item?.name || "家庭物品")} · ${formatDate(task.date)}</small></div><span class="task-date">${task.done ? "已完成" : relativeDate(task.date)}</span></div>`;
  };
  document.querySelector("#task-list").innerHTML = tasks.length ? tasks.map(markup).join("") : `<div class="empty-result"><h3>本周任务已完成</h3><p>你给家里的物品留出了被照顾的时间。</p></div>`;
  document.querySelectorAll("[data-task-id]").forEach((button) => button.addEventListener("click", () => completeTask(button.dataset.taskId)));
}

function renderCalendar() {
  document.querySelector("#calendar-list").innerHTML = state.tasks.map((task) => {
    const item = state.items.find((candidate) => candidate.id === task.itemId);
    return `<div class="calendar-task"><button class="task-check ${task.done ? "done" : ""}" data-calendar-task="${task.id}">${task.done ? "✓" : ""}</button><div><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(item?.name || "家庭物品")} · ${formatDate(task.date)}</small></div><span class="task-date">${task.done ? "已完成" : relativeDate(task.date)}</span></div>`;
  }).join("");
  document.querySelectorAll("[data-calendar-task]").forEach((button) => button.addEventListener("click", () => completeTask(button.dataset.calendarTask)));
}

function renderKnowledge(query = "") {
  const normalized = query.toLowerCase().trim();
  const result = KNOWLEDGE.filter((entry) => !normalized || `${entry.title}${entry.text}${entry.rules.join("")}`.toLowerCase().includes(normalized));
  document.querySelector("#knowledge-grid").innerHTML = result.map((entry) => `<article class="knowledge-card"><div class="knowledge-icon">${entry.icon}</div><h3>${entry.title}</h3><p>${entry.text}</p>${entry.rules.map((rule) => `<div class="rule">• ${rule}</div>`).join("")}</article>`).join("");
}

function renderAgents(active = false) {
  document.querySelector("#agent-list").innerHTML = AGENTS.map((agent, index) => `<div class="agent-row"><div class="agent-icon">${agent[2]}</div><div><strong>${agent[0]}Agent</strong><small>${active ? "已就绪 · " : "待命 · "}${agent[1]}</small></div><span class="agent-state ${active || index > 5 ? "" : "idle"}"></span></div>`).join("");
}

function renderHealth() {
  const average = Math.round(state.items.reduce((sum, item) => sum + item.score, 0) / Math.max(1, state.items.length));
  document.querySelector("#health-score").textContent = average;
  document.querySelector("#health-bars").innerHTML = ["wood", "leather", "metal"].map((category) => {
    const item = state.items.find((candidate) => candidate.category === category);
    const value = item?.score || 0;
    return `<div class="bar-row"><div><span>${categoryMeta(category).label}</span><span>${value}%</span></div><div class="bar"><span style="width:${value}%"></span></div></div>`;
  }).join("");
}

function renderAll() {
  renderStats();
  renderItems();
  renderTasks();
  renderCalendar();
  renderKnowledge(document.querySelector("#knowledge-search")?.value || "");
  renderAgents();
  renderHealth();
}

function completeTask(id) {
  const task = state.tasks.find((candidate) => candidate.id === id);
  if (!task) return;
  task.done = !task.done;
  persist();
  apiRequest(`/api/tasks/${encodeURIComponent(id)}/complete`, { method: "POST", body: JSON.stringify({ done: task.done }) });
  renderAll();
  showToast(task.done ? "任务已完成，物品健康度已更新" : "任务已重新加入待办");
}

function openItem(id) {
  const item = state.items.find((candidate) => candidate.id === id);
  if (!item) return;
  setView("diagnose");
  const form = document.querySelector("#diagnose-form");
  form.elements.name.value = item.name;
  form.elements.age.value = item.age;
  form.elements.category.value = item.category;
  form.elements.scene.value = item.scene;
  form.elements.notes.value = item.notes;
  showToast(`已载入「${item.name}」，可以重新诊断`);
}

function localAnalysis(input) {
  const meta = categoryMeta(input.category);
  const issueMap = { wood: ["轻微干裂", "环境湿度波动"], leather: ["局部干燥", "油脂流失"], metal: ["表面氧化", "水垢堆积"], fabric: ["表面积尘", "潮湿风险"], ceramic: ["釉面污渍", "需观察结构"], appliance: ["外观老化", "建议安全复查"] };
  const plans = {
    wood: ["用干燥软布沿木纹清除灰尘。", "在柜体内侧小范围测试木质护理油。", "薄涂一层护理油，静置20分钟后擦去多余油分。", "保持通风，7天后复查裂缝是否扩大。"],
    leather: ["用软布轻轻除尘，不要来回用力摩擦。", "在包底隐蔽处测试皮革护理剂。", "少量分区涂抹，静置吸收后擦匀。", "放在阴凉通风处自然干燥，避免暴晒。"],
    metal: ["关闭水源并用软布擦干表面。", "用温和清洁液处理水垢，不使用强酸。", "清洁后完全擦干，在转动部位薄涂防锈剂。", "7天后复查旋钮是否仍有卡顿。"],
    fabric: ["查看洗护标签并使用软毛刷除尘。", "在不明显处测试温和清洁剂。", "局部点擦污渍，避免浸泡和大面积打湿。", "保持通风，完全干燥后再使用。"],
    ceramic: ["用软海绵和温和清洁剂清洁釉面。", "擦干后检查裂纹、渗水和松动。", "发现裂纹扩大时停止使用并联系维修。", "每月复查密封和固定状态。"],
    appliance: ["先断开电源，观察是否有焦糊味、冒烟或异常发热。", "仅清洁外部进风口和表面灰尘。", "不要拆机、改线或使用液体冲洗。", "若异常持续，停止使用并联系专业人员。"],
  };
  const materials = { wood: ["超细纤维布", "木质护理油", "一次性手套"], leather: ["软布", "皮革护理剂", "防尘袋"], metal: ["软海绵", "温和清洁液", "防锈剂"], fabric: ["软毛刷", "温和清洁剂", "吸水毛巾"], ceramic: ["软海绵", "中性清洁剂", "干燥布"], appliance: ["软毛刷", "干燥布", "绝缘手套"] };
  const issue = issueMap[input.category] || issueMap.wood;
  return { ...input, categoryLabel: meta.label, issue: `${issue[0]} · ${issue[1]}`, risk: input.category === "appliance" ? "中风险" : "低风险", score: meta.score, plans: plans[input.category], materials: materials[input.category], avoid: input.category === "appliance" ? "禁止拆机、改线或继续使用出现焦糊味、冒烟、漏电、异常发热的设备。" : `不要使用强酸强碱清洁剂；${input.category === "leather" ? "不要使用酒精湿巾。" : "操作前先在隐蔽处进行小范围测试。"}`, confidence: input.category === "appliance" ? "78%" : "86%" };
}

async function analyze(input) {
  return (await apiRequest("/api/analyze", { method: "POST", body: JSON.stringify(input) })) || localAnalysis(input);
}

function renderResult(result) {
  state.lastResult = result;
  document.querySelector("#empty-result").classList.add("hidden");
  document.querySelector("#result-content").classList.remove("hidden");
  document.querySelector("#result-status").textContent = "已完成";
  document.querySelector("#result-status").className = "status ok";
  document.querySelector("#diagnosis-summary").innerHTML = `<div class="summary-box"><span>识别结果 · ${result.confidence || "86%"}</span><strong>${escapeHtml(result.categoryLabel)}</strong><span>${escapeHtml(result.issue)}</span></div><div class="summary-box risk"><span>风险分级</span><strong>${escapeHtml(result.risk)}</strong><span>建议：${result.risk === "低风险" ? "可进行家庭基础养护" : "先完成安全检查"}</span></div>`;
  document.querySelector("#agent-trace").innerHTML = AGENTS.map((agent) => `<div class="trace"><span>${agent[2]}</span><strong>${agent[0]}</strong><small>已完成</small></div>`).join("");
  document.querySelector("#care-plan").innerHTML = `<div class="result-block"><h3>建议这样做 · 预计15分钟</h3><ol>${result.plans.map((plan) => `<li>${escapeHtml(plan)}</li>`).join("")}</ol><div class="warning">⚠ 注意事项：${escapeHtml(result.avoid)}</div></div>`;
  document.querySelector("#materials").innerHTML = `<div class="result-block"><h3>准备这些就够了</h3><div class="chips">${result.materials.map((material) => `<span class="chip">＋ ${escapeHtml(material)}</span>`).join("")}</div></div>`;
  renderAgents(true);
}

async function handleDiagnose(event) {
  event.preventDefault();
  const input = Object.fromEntries(new FormData(event.target).entries());
  const button = event.target.querySelector('button[type="submit"]');
  button.disabled = true;
  button.innerHTML = "六位Agent协作中…";
  document.querySelector("#result-status").textContent = "分析中";
  renderAgents(true);
  const result = await analyze(input);
  renderResult(result);
  button.disabled = false;
  button.innerHTML = "重新开始诊断 <span>→</span>";
  showToast("诊断完成，方案已生成");
}

async function saveResult() {
  if (!state.lastResult) return;
  const result = state.lastResult;
  const preview = document.querySelector("#image-preview");
  const item = { id: uid(), name: result.name || "未命名物品", category: result.category, age: result.age, scene: result.scene, notes: result.notes, score: result.score, issue: result.issue, nextCare: daysFromNow(30), image: preview.src.startsWith("data:") ? preview.src : "" };
  state.items.unshift(item);
  state.tasks.unshift({ id: uid("task"), itemId: item.id, title: `${item.name}首次养护复查`, date: item.nextCare, done: false });
  persist();
  await apiRequest("/api/items", { method: "POST", body: JSON.stringify(item) });
  renderAll();
  setView("items");
  showToast("已保存到我的物品档案");
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { event.preventDefault(); setView(viewButton.dataset.view); }
  const tag = event.target.closest("[data-note]");
  if (tag) {
    const textarea = document.querySelector('[name="notes"]');
    textarea.value = textarea.value ? `${textarea.value}；${tag.dataset.note}` : tag.dataset.note;
  }
});

document.querySelector("#diagnose-form").addEventListener("submit", handleDiagnose);
document.querySelector("#save-result").addEventListener("click", saveResult);
document.querySelector("#image-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const preview = document.querySelector("#image-preview");
    preview.src = reader.result;
    preview.parentElement.classList.add("has-image");
  };
  reader.readAsDataURL(file);
});
document.querySelector("#item-search").addEventListener("input", renderItems);
document.querySelector("#knowledge-search").addEventListener("input", (event) => renderKnowledge(event.target.value));
document.querySelector("#item-filters").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll("#item-filters button").forEach((element) => element.classList.remove("active"));
  button.classList.add("active");
  renderItems();
});
document.querySelector("#export-button").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "oldcare-home-archive.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("档案已导出");
});
document.querySelector("#notification-button").addEventListener("click", () => { setView("calendar"); showToast("已打开你的养护日历"); });

renderAll();
hydrateFromBackend();
