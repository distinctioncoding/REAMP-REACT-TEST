import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { CiSearch } from 'react-icons/ci';
import { Agent } from '../../interfaces/agent';
import { getAllAgents } from '../../api/agent/get-all-agents';

const AgentList = () => {
    const { user } = useAuth();
    const [agentLists, setAgentLists] = useState<Agent[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    useEffect(()=>{
        getAllAgents()
        .then(setAgentLists)
        .catch((err)=>{
            console.error("Failed to fetch listings", err);
        })
    },[])

    const filteredAgents = agentLists.filter(agent =>
    `${agent.firstName} ${agent.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
        {filteredAgents.length === 0 && (
        <div className="absolute mt-1 left-0 bg-white shadow border p-2 w-full text-sm text-gray-500">
            No exist client, please try a new one or{" "}
            <span className="text-blue-600 underline cursor-pointer">Create New Client</span>.
        </div>
        )}
    </div>

    <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
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
            {filteredAgents.map(agent => (
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
                    <div className="absolute right-0 top-8 z-10 bg-white border rounded shadow-md w-28 text-left">
                    <button className="block w-full px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Edit</button>
                    <button className="block w-full px-4 py-2 hover:bg-gray-100 text-sm text-red-500">Delete</button>
                    </div>
                )}
                </td>
            </tr>
            ))}
        </tbody>
    </table>

    </div>

  )
}

export default AgentList