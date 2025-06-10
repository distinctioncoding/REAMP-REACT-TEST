import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  selected: ButtonType;
  onSelect: (status: ButtonType) => void;
}

const buttons = ['All', 'Created', 'Pending', 'Delivered'] as const;
export type ButtonType = typeof buttons[number];

function Sidebar({ selected, onSelect }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col w-48 bg-gray-50 p-4 rounded-md">
      <div className="flex flex-col space-y-1">
        {buttons.map((button) => (
        <button
          key={button}
          onClick={() => {
            onSelect(button);
            console.log(`===Selected: ${button}===`);
          }}
          className={`w-full px-4 py-2 rounded mb-2 font-medium transition-colors duration-200
            ${selected === button ? 'bg-gray-200 text-black' : 'text-gray-800 hover:bg-gray-100'}`}
        >
          {button}
        </button>
        ))}
      </div>

      <button
        onClick={() => navigate('/ChangePasswordPage')}
        className="w-full px-4 py-2 rounded mt-1 font-medium transition-colors duration-200 text-gray-800 hover:bg-gray-100"
      >
        Change Password
      </button>
    </aside>
  );
}

export default Sidebar;
