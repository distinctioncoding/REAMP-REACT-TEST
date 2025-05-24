import React, { useEffect, useState } from 'react';
import AgentCard from './AgentCard';
import { Agent } from '../../interfaces/agent';
import { getAllAgents } from '../../api/agent/get-all-agents';


const AgentsPage: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
  const loadAgents = async () => {
    try {
      const data = await getAllAgents();
      setAgents(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load agents');
    } finally {
      setLoading(false);
    }
  };

  loadAgents();
}, []);

  if (loading) return <p className="text-center mt-10">Loading agents...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;


// const AgentsPage: React.FC = () => {
//   const [agents, setAgents] = useState<AgentData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // ✅ 使用 mock 数据模拟后端响应
//   useEffect(() => {
//     const loadMockAgents = () => {
//       setTimeout(() => {
//         const mockAgents: AgentData[] = [
//           {
//             id: 1,
//             firstName: 'Alice',
//             lastName: 'Johnson',
//             avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
//             companyName: 'SnapPix Co.',
//             email: 'alice@example.com',
//             phoneNumber: '0400 111 111',
//           },
//           {
//             id: 2,
//             firstName: 'Bob',
//             lastName: 'Smith',
//             avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
//             companyName: 'SnapPix Co.',
//             email: 'bob@example.com',
//             phoneNumber: '0400 222 222',
//           },
//         ];

//         setAgents(mockAgents);
//         setLoading(false);
//       }, 1000); // 模拟请求延迟
//     };

//     loadMockAgents();
//   }, []);