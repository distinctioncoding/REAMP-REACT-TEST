import React, { useState } from 'react';
import { getAgentByEmail } from '../../api/agent/get-agent-by-email';
import { addAgentToCompany } from '../../api/agent/addAgentToCompany';



const AddAgentByEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'default' | 'added' | 'notfound' | 'error'>('default');

  const handleAddAgent = async () => {
    try {
      const agent = await getAgentByEmail(email);
      await addAgentToCompany(agent.id);
      setStatus('added');
    } catch (err: any) {
      if (err?.response?.status === 404) {
        setStatus('notfound');
      } else {
        setStatus('error');
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Agent by Email</h2>

      <input
        type="email"
        placeholder="Enter agent email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />

      <button
        onClick={handleAddAgent}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!email}
      >
        Search and Add
      </button>

      <div className="mt-4 text-sm">
        {status === 'default' && <p className="text-gray-500">Enter an agent email.</p>}
        {status === 'added' && <p className="text-green-600">Agent successfully added.</p>}
        {status === 'notfound' && <p className="text-red-600">Agent not found.</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong.</p>}
      </div>
    </div>
  );
};

export default AddAgentByEmail;

// mock测试
// const getAgentByEmail = async (email: string) => {
//   if (email === 'notfound@gmail.com') {
//     const error: any = new Error('Not found');
//     error.response = { status: 404 };
//     throw error;
//   }
//   return {
//     id: 'mock-agent-1',
//     email,
//     phoneNumber: '0400 123 456',
//     companyName: 'Mock Company',
//     avatarUrl: '',
//     firstName: 'Mock',
//     lastName: 'Agent',
//   };
// };