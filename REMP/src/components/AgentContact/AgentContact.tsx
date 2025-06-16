// src/pages/AgentContact.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CaseContactResponseDto } from '../../interfaces/CaseContact';
import { getCaseContactsByListing } from '../../api/caseContactApi';
import CreateAgentContactForm from './CreateAgentContactForm';
import SavedAgentsContactForm from './SavedAgentsContactForm';

interface LocationState {
  listingId: number;
}

const defaultAvatar =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalljTSZqVNiMcODXhfKpF25M-mn_-6fVx8g&s';

const AgentContact: React.FC = () => {
  const { state } = useLocation();
  const { listingId } = state as LocationState;
  const navigate = useNavigate();

  const [isCreating, setIsCreating] = useState(false);
  const [contacts, setContacts] = useState<CaseContactResponseDto[]>([]);


  useEffect(() => {
    const fetchSavedAgents = async (id: number) => {
    try {
      const list = await getCaseContactsByListing(id);
      setContacts(list);
    } catch (err: any) {
      if (err.response?.status === 400) {
        setContacts([]);
        console.error('获取已保存联系人失败，接口返回 BadRequest', err);
      } else {
        setContacts([]);
        console.error('获取已保存联系人失败', err);
      }
    }
  };

    if (listingId > 0) {
      fetchSavedAgents(listingId);
    }
  }, [listingId]);

  const handleSuccess = () => {
    getCaseContactsByListing(listingId).then(setContacts);
    setIsCreating(false);
  };

  const handleCancel = () => setIsCreating(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-auto bg-white rounded-xl shadow-lg p-6">
        <button
          onClick={() => {
            if (isCreating) {
              //右上角 X
              //创建时关闭表单
              handleCancel();
            } else {
              //查看saved agents的时候退一步
              navigate(-1);
            }
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {!isCreating ? (
          <>
            <h2 className="text-2xl font-semibold mb-1">Agents Contact</h2>
            <p className="text-gray-600 mb-4 text-center">
              Please complete the contact information.
            </p>
            <hr />

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsCreating(true)}
                className="h-12 px-6 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                Create a new agent
              </button>
            </div>

            <SavedAgentsContactForm
              contacts={contacts}
              defaultAvatar={defaultAvatar}
            />

            <hr className="mt-6" />
            <div className="flex justify-end mt-4">
              <button
                disabled
                className="h-12 px-6 bg-gray-300 text-white rounded-full cursor-not-allowed"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <CreateAgentContactForm
              listingId={listingId}
              defaultAvatar={defaultAvatar}
              onCancel={handleCancel}
              onSuccess={handleSuccess}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AgentContact;
