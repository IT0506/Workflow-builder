from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# -----------------------------
# Enable CORS for Frontend
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Root Route (So / Works)
# -----------------------------
@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}


# -----------------------------
# Request Model
# -----------------------------
class PipelineRequest(BaseModel):
    nodes: List[dict]
    edges: List[dict]


# -----------------------------
# Pipeline Parse Endpoint
# -----------------------------
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineRequest):

    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")

        if source in graph and target in graph:
            graph[source].append(target)

    # -----------------------------
    # DAG Check using DFS
    # -----------------------------
    visited = set()
    rec_stack = set()

    def has_cycle(node):
        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if has_cycle(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }