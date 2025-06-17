// src/pages/AgentContact.tsx
import React, { useEffect, useState } from 'react';
import { CaseContactResponseDto } from '../../interfaces/CaseContact';
import { getCaseContactsByListing } from '../../api/caseContactApi';
import SavedAgentsContactForm from './SavedAgentsContactForm';
import CreateAgentContactForm from './CreateAgentContactForm';


interface AgentContactProps {
  listingId: number;
  defaultAvatar: string;
  onCancel: () => void;
  onSuccess: () => void;
}

const AgentContact: React.FC<AgentContactProps> = ({
  listingId,
  defaultAvatar,
  onCancel,
  onSuccess,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [contacts, setContacts] = useState<CaseContactResponseDto[]>([]);

  useEffect(() => {
    const fetchSavedAgents = async (id: number) => {
      try {
        const list = await getCaseContactsByListing(id);
        setContacts(list);
      } catch (err: any) {
        console.error('获取已保存联系人失败', err);
        setContacts([]);
      }
    };
    fetchSavedAgents(listingId);
  }, [listingId]);

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-auto bg-white rounded-xl shadow-lg p-6 pointer-events-auto"
      >
        <button
          onClick={onCancel}
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
          <CreateAgentContactForm
            listingId={listingId}
            defaultAvatar={defaultAvatar}
            onCancel={() => setIsCreating(false)}
            onSuccess={() => {
              getCaseContactsByListing(listingId).then(setContacts);
              setIsCreating(false);
              onSuccess();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AgentContact;
