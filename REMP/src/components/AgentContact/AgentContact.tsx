import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CaseContactRequestDto, CaseContactResponseDto } from '../../interfaces/CaseContact';
import { addCaseContact, getCaseContactsByListing } from '../../api/caseContactApi';
import { HiPencil, HiTrash } from 'react-icons/hi';

const AgentContact: React.FC = () => {
  const { listingId: listingIdStr } = useParams<{ listingId: string }>();
  const listingId = listingIdStr ? Number(listingIdStr) : NaN;
  const navigate = useNavigate();

  const [isCreating, setIsCreating] = useState(false);
  const [contacts, setContacts] = useState<CaseContactResponseDto[]>([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const isFormValid = Boolean(
    firstName.trim() &&
    lastName.trim() &&
    listingId > 0
  );

  if (isNaN(listingId) || listingId <= 0) {
    return <div className="p-6 text-red-500">无效的 listingId：{listingIdStr}</div>;
  }

  useEffect(() => {
    fetchSavedAgents(listingId);
  }, [listingId]);

  const fetchSavedAgents = async (id: number) => {
    try {
      const list = await getCaseContactsByListing(id);
      setContacts(list);
    } catch (err: any) {
      if (err.response?.status === 400) {
        setContacts([]);
      } else {
        console.error('获取已保存联系人失败', err);
        alert('获取已保存联系人失败，请稍后重试');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setAvatarFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  //默认头像图标
  const default_avatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalljTSZqVNiMcODXhfKpF25M-mn_-6fVx8g&s';

  const handleSubmit = async () => {
    if (!isFormValid) return;

    const profileUrlToshow = previewUrl || default_avatar;

    const payload: CaseContactRequestDto = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      companyName: companyName.trim() || undefined,
      email: email.trim() || undefined,
      phoneNumber: phoneNumber.trim() || undefined,
      profileUrl: profileUrlToshow,
      listingCaseId: listingId,
    };

    try {
      await addCaseContact(payload);
      await fetchSavedAgents(listingId);
      setIsCreating(false);
      // 重置表单
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setEmail('');
      setPhoneNumber('');
      setAvatarFile(null);
      setPreviewUrl('');
    } catch (err: any) {
      console.error(err);
      const raw = err.response?.data;
      const msg = raw?.message ?? JSON.stringify(raw) ?? err.message;
      alert(`关联联系人失败：${msg}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-auto bg-white rounded-xl shadow-lg p-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >✕</button>

        {!isCreating ? (
          <>
            <h2 className="text-2xl font-semibold mb-1">Agents Contact</h2>
            <p className="text-gray-600 mb-4">Please complete the contact information.</p>
            <hr />

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsCreating(true)}
                className="h-12 px-6 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >Create a new agent</button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">Saved agents</h3>
              <div className="max-h-64 overflow-y-auto space-y-2">
                {contacts.length === 0 ? (
                  <div className="p-4 text-gray-500 text-center">暂无联系人</div>
                ) : contacts.map((c, idx) => (
                  <div
                    key={`${c.email ?? ''}-${c.listingCaseId}-${idx}`}
                    className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                  >
                    <div className="flex items-center">
                      <img
                        src={c.profileUrl ?? default_avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="font-medium">{c.firstName} {c.lastName}</div>
                        <div className="text-sm text-gray-500">{c.companyName}</div>
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
                ))}
              </div>
            </div>

            <hr className="mt-6" />
            <div className="flex justify-end mt-4">
              <button
                disabled
                className="h-12 px-6 bg-gray-300 text-white rounded-full cursor-not-allowed"
              >Save</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Create a new agent</h2>
            <p className="text-gray-600 mb-4 text-center">Please complete below information.</p>
            <hr className="mb-6" />

            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="avatar-upload"
                  className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2 cursor-pointer overflow-hidden"
                >
                  {previewUrl
                    ? <img src={previewUrl} alt="预览" className="w-full h-full object-cover" />
                    : <span className="text-gray-500 text-2xl">＋</span>
                  }
                </label>
                <span className="text-gray-600">Photo</span>
              </div>

              {[
                { label: 'First name *', value: firstName, setter: setFirstName, type: 'text' },
                { label: 'Last name *', value: lastName, setter: setLastName, type: 'text' },
                { label: 'Email', value: email, setter: setEmail, type: 'email' },
                { label: 'Phone number', value: phoneNumber, setter: setPhoneNumber, type: 'tel' },
                { label: 'Company name', value: companyName, setter: setCompanyName, type: 'text' },
              ].map(({ label, value, setter, type }) => (
                <div key={label}>
                  <label className="block mb-1 font-medium">{label}</label>
                  <input
                    type={type}
                    value={value}
                    onChange={e => setter(e.target.value)}
                    className="w-full h-12 rounded-lg border border-gray-300 px-4
                               focus:outline-none focus:ring focus:ring-blue-200
                               hover:border-blue-400 transition"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full h-12 rounded-full text-white font-medium transition
                  ${isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}
                `}
              >Create</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentContact;
