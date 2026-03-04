// nodes/FilterNode.js

import BaseNode from "./BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="Filter"
      icon="🔍"
      handles={[
        {
          type: "target",
          id: "input",
        },
        {
          type: "source",
          id: "true",
          style: { top: "35%" },
          color: "success",
        },
        {
          type: "source",
          id: "false",
          style: { top: "70%" },
          color: "danger",
        },
      ]}
    >
      <input
        type="text"
        placeholder="Enter condition (e.g. > 10)"
        className="border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </BaseNode>
  );
};