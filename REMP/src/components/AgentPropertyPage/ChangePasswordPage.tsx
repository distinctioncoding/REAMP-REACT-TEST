// src/components/ChangePasswordPage.tsx
import React, { useState } from 'react';
import { UpdatePasswordDTO } from '../../interfaces/User';
import { changePassword } from '../../api/agent/change-password-agent-api';

interface Props {
  onClose: () => void;
}

const ChangePasswordPopup: React.FC<Props> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      setTimeout(() => {
        onClose(); // 1.5秒后关闭弹窗
      }, 1500);
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
    <div className="fixed inset-0 backdrop-blur-sm backdrop-saturate-100 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Change Password</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
        </div>

        {error && <p className="text-red-600 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">Password changed successfully.</p>}

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
    </div>
  );
};

export default ChangePasswordPopup;
