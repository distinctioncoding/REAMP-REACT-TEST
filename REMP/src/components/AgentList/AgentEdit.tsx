import React, { useState } from 'react'
import { updateAgentForm } from '../../interfaces/agent-update'
import { updateAgent } from '../../api/update-agent';

interface Props {
    agent: updateAgentForm;
    onClose: () => void;
    onUpdate: () => void;
}

const AgentEditDialog = ({ agent, onClose, onUpdate }: Props) => {
  const [form, setForm] = useState<updateAgentForm>({ ...agent, avatarImage: null});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value}));  //基于上一次的 form 对象，更新其中一个字段（由 input 的 name 属性决定），其它字段不变
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm(prev => ({ ...prev, avatarImage: file }));
    }
  };


  const handleSubmit = async() => {
    try{
        await updateAgent(form);
        onUpdate();
        onClose();
    }catch(err){
       console.error("Failed to update agent", err); 
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Agent</h2>
        <div className="space-y-3">

          <input 
          name="agentFirstName" 
          value={form.agentFirstName} 
          onChange={handleChange} 
          placeholder="First Name" 
          className="input" />

          <input name="agentLastName" 
          value={form.agentLastName} 
          onChange={handleChange} 
          placeholder="Last Name" 
          className="input" />

          <input 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Email" 
          className="input" />

          <input 
          name="phoneNumber" 
          value={form.phoneNumber} 
          onChange={handleChange} 
          placeholder="Phone Number" 
          className="input" />

          <input 
          name="companyName" 
          value={form.companyName} 
          onChange={handleChange} 
          placeholder="Company" 
          className="input" />

          <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} />
          
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-1 border rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-1 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};


export default AgentEditDialog