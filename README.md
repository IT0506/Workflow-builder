🚀 Workflow Builder (Pipeline DAG Validator)

A full-stack Workflow Builder application that allows users to:

-Drag and drop different node types

-Connect nodes visually

-Submit the pipeline

-Validate whether the graph is a DAG (Directed Acyclic Graph)

-View node count, edge count, and DAG validation result

Built with:

⚛ React (Frontend)

🌊 React Flow (Graph UI)

🐻 Zustand (State Management)

🎨 Tailwind CSS (Styling)

⚡ FastAPI (Backend)

🧠 DFS-based Cycle Detection (DAG Check)

📌 Features
🧩 Drag-and-Drop Nodes

Input Node

LLM Node

Output Node

Text Node

🔗 Connect Nodes

Create directed edges between nodes visually.

✅ DAG Validation

On submit, backend checks:

Total number of nodes

Total number of edges

Whether the graph contains a cycle

🔁 Cycle Detection

Uses Depth-First Search (DFS) with recursion stack to detect cycles.

🏗 Project Structure
frontend/
  src/
    App.js
    ui.js
    toolbar.js
    submit.js
    store.js
    nodes/
backend/
  main.py

  
🛠 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/workflow-builder.git
cd workflow-builder
🖥 Frontend Setup (React)

Go inside frontend folder:

cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000


🧠 Backend Setup (FastAPI)

Go inside backend folder:

cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

Backend runs at:

http://127.0.0.1:8000

Test root:

http://127.0.0.1:8000/
