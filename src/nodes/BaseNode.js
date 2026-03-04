// nodes/BaseNode.js

import { Handle, Position } from "reactflow";

const handleColors = {
  default: "#6366f1",
  success: "#22c55e",
  danger: "#ef4444",
};

const BaseNode = ({
  id,
  label,
  icon,
  children,
  handles = [],
}) => {
  return (
    <div className="min-w-[220px] bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-200">
        {icon && <span className="text-indigo-600">{icon}</span>}
        <span className="text-sm font-semibold text-slate-700">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {children}
      </div>

      {/* Handles */}
      {handles.map((h, index) => (
        <Handle
          key={index}
          type={h.type}
          position={
            h.position ||
            (h.type === "target" ? Position.Left : Position.Right)
          }
          id={`${id}-${h.id}`}
          style={{
            background: handleColors[h.color] || handleColors.default,
            width: 10,
            height: 10,
            ...h.style,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;