import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { CiSearch } from 'react-icons/ci';
import { Agent } from '../../interfaces/agent-response';
import { searchAgent } from '../../api/agent/search-agent';
import { getAllAgents } from '../../api/agent/get-all-agents';
import CreateAgentModel from './CreateAgentModel';
import AgentDeleteButton from './AgentDelete';

const AgentList = () => {
  const { user } = useAuth();
  const [agentLists, setAgentLists] = useState<Agent[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);


  useEffect(() => {
    const fetchAgents = async () => {
      if (!searchTerm.trim()) {
        try {
            const result = await getAllAgents();
            setAgentLists(result);
        } catch (err) {
            console.error("Failed to fetch all agents", err);
            setAgentLists([]);
        }
        return;
    }

      setLoading(true);
      try {
        const result = await searchAgent(searchTerm);
        setAgentLists(result);
      } catch (err) {
        console.error("Search failed", err);
        setAgentLists([]);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchAgents, 300); // 防抖
    return () => clearTimeout(delay);
  }, [searchTerm]);

  function setEditingAgent(agent: Agent) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Hi, Welcome {user?.userName}!</h1>

      <div className="flex items-center mb-4">
        <div className="relative w-full max-w-xl mx-auto flex-1">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search client..."
            className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm"
          />
          {!loading && searchTerm && agentLists.length === 0 && (
            <div className="absolute mt-1 left-0 bg-white shadow border p-2 w-full text-sm text-gray-500">
              No existing client, please try a new one or{" "}
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setShowCreateModal(true)}
              >
                Create New Client
            </span>

            </div>
          )}
        </div>

        <button 
          onClick={() => setShowCreateModal(true)}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap"
        >
          + Create New Client
        </button>

      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="p-2">Client Name</th>
            <th className="p-2">Company</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Email</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agentLists.map((agent) => (
            <tr key={agent.id} className="text-sm text-center hover:bg-gray-50 relative">
              <td className="p-2">{agent.firstName} {agent.lastName}</td>
              <td className="p-2">{agent.companyName}</td>
              <td className="p-2">{agent.phoneNumber}</td>
              <td className="p-2">{agent.email}</td>
              <td className="p-2 relative">
                <button onClick={() => setOpenMenuId(openMenuId === agent.id ? null : agent.id)}>
                  ⋯
                </button>
                {openMenuId === agent.id && (
                  <div className="absolute right-0 top-8 z-10 bg-white border rounded shadow-md text-left">
                    <button 
                      onClick={()=>{
                      setEditingAgent(agent)
                      setOpenMenuId(null)
                      }} 
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      Edit
                    </button>
                    <AgentDeleteButton
                      agentId={agent.id}
                      onDelete={async () => {
                        const updatedAgents = await getAllAgents();
                        setAgentLists(updatedAgents);
                        setOpenMenuId(null);
                      }}
                    />
                  <div className="absolute right-0 top-8 z-10 bg-white border rounded shadow-md text-left">
                    <button 
                      onClick={()=>{
                      setEditingAgent(agent)
                      setOpenMenuId(null)
                      }} 
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      Edit
                    </button>
                    <AgentDeleteButton
                      agentId={agent.id}
                      onDelete={async () => {
                        const updatedAgents = await getAllAgents();
                        setAgentLists(updatedAgents);
                        setOpenMenuId(null);
                      }}
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCreateModal && (
        <CreateAgentModel
          isVisible={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onCreateSuccess={async () => {
            const updated = await getAllAgents();
            setAgentLists(updated);
            setShowCreateModal(false);
          }}
        />
      )}
    </div>
    
  );
};

export default AgentList;
