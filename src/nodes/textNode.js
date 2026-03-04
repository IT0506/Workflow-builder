// nodes/TextNode.js

import { useState, useEffect, useMemo, useRef } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const textareaRef = useRef(null);

  // ✅ 1. Auto Resize Textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // ✅ 2. Extract Variables {{variable}}
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [text]);

  // ✅ 3. Generate Handles dynamically
  const dynamicHandles = variables.map((variable, index) => ({
    type: "target",
    id: variable,
    position: Position.Left,
    style: {
      top: `${30 + index * 20}px`,
    },
  }));

  return (
    <BaseNode
      id={id}
      label="Text"
      icon="📝"
      handles={[
        ...dynamicHandles,
        {
          type: "source",
          id: "output",
        },
      ]}
      className="min-w-[250px]"
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text... Use {{variable}} to create inputs"
        className="
          w-full
          resize-none
          border
          border-slate-300
          rounded-md
          px-3
          py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-400
          overflow-hidden
        "
      />

      {/* Variable Preview (Optional Nice UX) */}
      {variables.length > 0 && (
        <div className="text-xs text-slate-500 mt-2">
          Variables detected:
          <div className="flex flex-wrap gap-1 mt-1">
            {variables.map((v) => (
              <span
                key={v}
                className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      )}
    </BaseNode>
  );
};