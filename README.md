# 旧物新生：家庭物品智能养护多Agent系统

面向普通家庭的物品养护助手，覆盖物品录入、状态识别、损耗诊断、个性化方案、耗材匹配、周期提醒和养护复盘六个Agent环节。

## 当前实现

- 前端：原生 HTML、CSS、JavaScript，可直接打开或通过静态服务器运行。
- 后端：FastAPI，提供物品分析、知识库检索、物品档案和任务完成接口。
- Agent：LangGraph六节点工作流；未安装LangGraph时自动回退到同一套顺序式Agent流程。
- 知识库：`knowledge_base.json`，按材质、损耗、禁忌操作和周期组织。
- 数据库：SQLite，默认写入 `E:\oldcare-resources\data\oldcare.db`。
- 资源目录：依赖缓存、模型缓存和项目数据统一规划到 `E:\oldcare-resources`。
- 模型：当前默认使用本地规则和知识库，便于无API密钥稳定演示；后续可在 `backend/main.py` 的工作流中接入视觉模型。

## 目录结构

```text
index.html                 前端入口
styles.css                 页面样式
app.js                     前端交互、接口调用和本地降级
backend/main.py            FastAPI与六Agent工作流
backend/requirements.txt   Python依赖
knowledge_base.json        结构化养护知识库
scripts/setup_e_drive.ps1  E盘资源和Python环境初始化
start_backend.ps1          启动后端服务
```

## 推荐运行方式

### 1. 初始化E盘资源和依赖

在项目根目录执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup_e_drive.ps1
```

脚本会准备以下目录：

```text
E:\oldcare-resources\python
E:\oldcare-resources\cache
E:\oldcare-resources\data
E:\oldcare-resources\models
```

### 2. 启动完整前后端

```powershell
powershell -ExecutionPolicy Bypass -File .\start_backend.ps1
```

浏览器访问 `http://127.0.0.1:8000`。

### 3. 只运行前端演示

```powershell
python -m http.server 5500
```

浏览器访问 `http://127.0.0.1:5500`。没有后端时，诊断页面会自动使用本地规则引擎。

## API接口

| 方法 | 路径 | 作用 |
|---|---|---|
| GET | `/api/health` | 检查服务和LangGraph状态 |
| GET | `/api/dashboard` | 获取物品和养护任务 |
| POST | `/api/analyze` | 执行六Agent诊断 |
| GET | `/api/knowledge/search?q=木质` | 检索养护知识 |
| POST | `/api/items` | 保存物品档案 |
| POST | `/api/tasks/{id}/complete` | 更新任务状态 |
| POST | `/api/items/{id}/records` | 添加养护记录 |

## 安全边界

小家电异常、燃气、电路、严重结构损坏和大范围霉变只进行风险分流，不提供拆机、改线、强腐蚀处理等高风险操作指导。
