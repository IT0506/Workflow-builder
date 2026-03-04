import { ReactFlowProvider } from "reactflow";
import { PipelineUI } from "./ui";
import Submit from "./submit";
import Toolbar from "./toolbar";

function App() {
  return (
    <ReactFlowProvider>
      <div className="flex h-screen">

        {/* Sidebar */}
        <div className="w-72 bg-white border-r p-6">
          <Toolbar />
          <div className="mt-6">
            <Submit />
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1">
          <PipelineUI />
        </div>

      </div>
    </ReactFlowProvider>
  );
}

export default App;