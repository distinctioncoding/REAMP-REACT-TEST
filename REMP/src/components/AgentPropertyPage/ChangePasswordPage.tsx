// src/components/ChangePasswordPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdatePasswordDTO } from '../../interfaces/User';
import { changePassword } from '../../api/agent/change-password-agent-api';

const ChangePasswordPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError('');
    if (!currentPassword || !newPassword) {
      setError('Please fill in both fields.');
      return;
    }
    setSubmitting(true);
    try {
      const dto: UpdatePasswordDTO = { currentPassword, newPassword };
      await changePassword(dto);
      alert('Password changed successfully.');
      navigate('/AgentPropertyPage');
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        'Failed to change password. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            autoComplete="current-password"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            autoComplete="new-password"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default ChangePasswordPage;
