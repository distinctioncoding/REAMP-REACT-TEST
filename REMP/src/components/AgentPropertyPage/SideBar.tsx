interface SidebarProps {
  selected: string;
  onSelect: (status: string) => void;
}

const buttons = ['All', 'Created', 'Pending', 'Delivered'];

function Sidebar({selected,onSelect}:SidebarProps) {
  return(
    <aside className="w-48 bg-gray-50 p-4 rounded-md min-h-screen">
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
    </aside>
  );
}

export default Sidebar;

