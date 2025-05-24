import { useState } from "react";
import { deleteAgentById } from "../../api/agent/delete-agent-api";

interface Props {
    agentId:string;
    onDelete:()=>void;
}

const AgentDeleteButton = ({ agentId, onDelete }:Props) => {

  const [confirming, setConfirming] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
    try {
        setLoading(true);
        await deleteAgentById(agentId);
        onDelete();
        setConfirming(false);
    } catch (err) {
        console.error("Failed to delete agent", err);
    } finally {
        setLoading(false);
    }
    };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setConfirming(true)}
        className="block w-full text-left text-red-500 hover:bg-gray-100 px-4 py-2"
      >
        Delete
      </button>

      {confirming && (
        <div className="absolute z-20 bg-white border rounded shadow-md mt-1 right-0 p-4 w-56">
          <p className="text-sm text-gray-700 mb-3">Are you sure you want to delete this agent?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setConfirming(false)}
              className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button
                disabled={loading}
                onClick={handleDelete}
                className={`px-3 py-1 text-sm text-white rounded 
                    ${loading ? 'bg-red-300' : 'bg-red-500 hover:bg-red-600'}`}
                >
                {loading ? "Deleting..." : "Confirm"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDeleteButton;