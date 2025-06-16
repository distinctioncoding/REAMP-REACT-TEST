// src/components/SavedAgentsContactForm.tsx
import React from 'react';
import { CaseContactResponseDto } from '../../interfaces/CaseContact';
import { HiPencil, HiTrash } from 'react-icons/hi';

interface SavedAgentsContactFormProps {
    contacts: CaseContactResponseDto[];
    defaultAvatar: string;
}

const SavedAgentsContactForm: React.FC<SavedAgentsContactFormProps> = ({
    contacts,
    defaultAvatar,
}) => {
    return (
        <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Saved agents</h3>
            <div className="max-h-64 overflow-y-auto space-y-2">
                {contacts.length === 0 ? (
                    <div className="p-4 text-gray-500 text-center">暂无联系人</div>
                ) : (
                    contacts.map((c, idx) => (
                        <div
                            key={`${c.email}-${c.listingCaseId}-${idx}`}
                            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                        >

                            <div className="flex items-center">
                                <img
                                    src={c.profileUrl || defaultAvatar}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <div>
                                    <div className="font-medium">
                                        {c.firstName} {c.lastName}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {c.companyName}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button className="p-1 bg-gray-200 rounded hover:bg-blue-200 transition">
                                    <HiPencil className="text-gray-600" />
                                </button>
                                <button className="p-1 bg-gray-200 rounded hover:bg-red-200 transition">
                                    <HiTrash className="text-gray-600" />
                                </button>
                                <input
                                    type="checkbox"
                                    className={`
                                    appearance-none w-6 h-6 bg-white rounded-[2px]
                                    shadow-[0_1px_2px_rgba(0,0,0,0.1)] relative transition
                                    checked:bg-green-500
                                    checked:shadow-none
                                    checked:before:content-['✔']
                                    checked:before:absolute
                                    checked:before:inset-0
                                    checked:before:flex
                                    checked:before:items-center
                                    checked:before:justify-center
                                    checked:before:text-white
                                `}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SavedAgentsContactForm;
