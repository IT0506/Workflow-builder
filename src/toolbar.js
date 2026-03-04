export default function Toolbar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const baseClasses =
    "pointer-events-auto select-none cursor-grab active:cursor-grabbing bg-white border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition text-center";

  return (
    <div className="space-y-4">
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "customInput")}
        className={baseClasses}
      >
        🔵 Input Node
      </div>

      <div
        draggable
        onDragStart={(event) => onDragStart(event, "llm")}
        className={baseClasses}
      >
        🧠 LLM Node
      </div>

      <div
        draggable
        onDragStart={(event) => onDragStart(event, "customOutput")}
        className={baseClasses}
      >
        🟢 Output Node
      </div>

      <div
        draggable
        onDragStart={(event) => onDragStart(event, "text")}
        className={baseClasses}
      >
        📝 Text Node
      </div>
    </div>
  );
}