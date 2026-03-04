import { useReactFlow } from "reactflow";

const Submit = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Analysis:\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Backend not connected!");
    }
  };

  return (
    <div className="p-4 bg-white border-t flex justify-end">
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Submit Pipeline
      </button>
    </div>
  );
};

export default Submit;