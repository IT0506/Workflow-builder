// draggableNode.js

export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";

    // Visual feedback while dragging
    event.currentTarget.classList.add("opacity-70", "scale-95");
  };

  const onDragEnd = (event) => {
    event.currentTarget.classList.remove("opacity-70", "scale-95");
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
      className="
        group
        w-full
        min-w-[140px]
        h-[70px]
        px-4
        flex
        items-center
        justify-center
        rounded-xl
        bg-white
        border
        border-slate-200
        shadow-sm
        hover:shadow-md
        hover:border-indigo-400
        transition
        duration-200
        cursor-grab
        active:cursor-grabbing
      "
    >
      <div className="flex flex-col items-center justify-center">
        
        <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition">
          {label}
        </span>

        <span className="text-xs text-slate-400 mt-1">
          Drag to canvas
        </span>

      </div>
    </div>
  );
};