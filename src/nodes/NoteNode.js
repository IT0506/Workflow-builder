// nodes/NoteNode.js

import BaseNode from "./BaseNode";

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      label="Sticky Note"
      icon="📝"
      handles={[
        {
          type: "target",
          id: "input",
        },
      ]}
    >
      <textarea
        placeholder="Write a note..."
        defaultValue={data?.text || ""}
        className="
          w-full
          min-h-[80px]
          resize-none
          border
          border-slate-200
          rounded-md
          px-2
          py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-400
        "
      />
    </BaseNode>
  );
};