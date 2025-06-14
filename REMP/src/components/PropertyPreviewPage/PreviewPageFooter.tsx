// src/components/PreviewPageFooter.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCaseContactsByListing } from '../../api/caseContactApi';
import { CaseContactResponseDto } from '../../interfaces/CaseContact';
import { HiPencil, HiTrash } from 'react-icons/hi';

interface PreviewPageFooterProps {
  listingId?: number;
}
const default_avatar =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalljTSZqVNiMcODXhfKpF25M-mn_-6fVx8g&s';

const PreviewPageFooter: React.FC<PreviewPageFooterProps> = ({ listingId }) => {
  const navigate = useNavigate();
    const [contacts, setContacts] = useState<CaseContactResponseDto[]>([]);
   useEffect(() => {
    if (listingId && listingId > 0) {
      getCaseContactsByListing(listingId)
        .then(list => setContacts(list))
        .catch(err => {
          if (err.response?.status === 400) setContacts([]);
          else console.error('拉联系人失败', err);
        });
    }
  }, [listingId]);

  const handleAdd = () => {
    if (listingId && listingId > 0) {
      navigate(`/AgentContact/${listingId}`);
    }
  };

return (
    <div className="bg-white rounded-lg shadow p-6 mt-8 ">
      <h2 className="text-2xl font-bold mb-2 text-center">Contact</h2>

      {contacts.length === 0 ? (
        <p className="text-sm text-gray-500 mb-4">Please add agents contact</p>
      ) : (
        <div className="space-y-3 mb-4">
          {contacts.map((c, idx) => (
            <div
              key={`${c.email ?? ''}-${c.listingCaseId}-${idx}`}
              className="flex items-center justify-between bg-gray-100 rounded-lg p-3"
            >
              <div className="flex items-center">
                <img
                  src={c.profileUrl || default_avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="font-medium">
                    {c.firstName} {c.lastName}
                  </div>
                  <div className="text-sm text-gray-500">{c.companyName}</div>
                </div>
              </div>
              <div className="flex-1 text-right mr-3">
                <div className="text-sm text-gray-700">{c.phoneNumber}</div>
                <div className="text-xs text-gray-500">{c.email}</div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-300 transition">
                  <HiPencil className="text-blue-600" />
                </button>
                <button className="p-2 bg-red-100 rounded-full hover:bg-red-300 transition">
                  <HiTrash className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleAdd}
          disabled={!listingId || listingId <= 0}
          className={`
            underline text-sm font-semibold
            ${!listingId ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:text-blue-800'}
          `}
        >
          Click to add
        </button>
      </div>
    </div>
  );
};

export default PreviewPageFooter;
function setContacts(list: CaseContactResponseDto[]): any {
  throw new Error('Function not implemented.');
}

