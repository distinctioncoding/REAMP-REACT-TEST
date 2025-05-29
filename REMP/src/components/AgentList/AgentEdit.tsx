import React, { useState } from 'react'
import { updateAgent } from '../../api/agent/update-agent';
import { updateAgentForm } from '../../interfaces/agent-request';

interface Props {
  agent: updateAgentForm;
  onClose: () => void;
  onUpdate: () => void;
}

const AgentEditDialog = ({ agent, onClose, onUpdate }: Props) => {
  const [form, setForm] = useState<updateAgentForm>({ ...agent, avatarImage: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm(prev => ({ ...prev, avatarImage: file }));
    }
  };

  const handleSubmit = async () => {
    try {
      await updateAgent(form);
      onUpdate();
      onClose();
    } catch (err) {
      console.error("Failed to update agent", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-6">Edit Client Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              name="agentLastName"
              value={form.agentLastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              name="agentFirstName"
              value={form.agentFirstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {form.avatarImage && (
              <img
                src={URL.createObjectURL(form.avatarImage)}
                alt="Preview"
                className="mt-2 w-24 h-24 object-contain border"
              />
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentEditDialog;
