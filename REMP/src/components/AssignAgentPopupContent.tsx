// src/components/AssignAgentPopupContent.tsx
import React, { useEffect, useState } from 'react';
import defaultAvatar from '../assets/default-avatar.jpg'
import { Agent } from '../interfaces/agent-response';
import { getAllAgents } from '../api/agent/get-all-agents';
import { assignAgentToListing } from '../api/listingcase/listing-addAgent';

interface AssignAgentPopupContentProps {
  listingCaseId: number;
  onAssigned?: () => void;
}

const AssignAgentPopupContent: React.FC<AssignAgentPopupContentProps> = ({
  listingCaseId,
  onAssigned,
}) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [assigningId, setAssigningId] = useState<string | null>(null);
  const [errorMap, setErrorMap] = useState<Record<string, string>>({});

  useEffect(() => {
    getAllAgents()
      .then((res) => setAgents(res))
      .catch((err) => console.error('Failed to load agents', err));
  }, []);

  const handleAssign = async (agentId: string) => {
    setAssigningId(agentId);
    setErrorMap((prev) => ({ ...prev, [agentId]: '' })); // 清除旧错误
    try {
      await assignAgentToListing(listingCaseId, agentId);
      if (onAssigned) onAssigned();
    } catch (err) {
      console.error('Failed to assign agent:', err);
      setErrorMap((prev) => ({ ...prev, [agentId]: 'Add agent faild' }));
    } finally {
      setAssigningId(null);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-2">All agents</h3>
      <div className="max-h-64 overflow-y-auto space-y-2">
        {agents.length === 0 ? (
          <div className="p-4 text-gray-500 text-center">There is no available agent</div>
        ) : (
          agents.map((agent) => (
            <div
              key={agent.id}
              className="flex flex-col gap-1 p-3 bg-gray-100 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={agent.avatarUrl || defaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-medium">
                      {agent.firstName} {agent.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{agent.companyName}</div>
                  </div>
                </div>

                <button
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:opacity-60"
                  onClick={() => handleAssign(agent.id)}
                  disabled={assigningId === agent.id}
                >
                  {assigningId === agent.id ? 'adding...' : 'Add agent to list'}
                </button>
              </div>

              {errorMap[agent.id] && (
                <div className="text-red-500 text-sm ml-14">{errorMap[agent.id]}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AssignAgentPopupContent;
