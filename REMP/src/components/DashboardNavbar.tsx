import { LogOut } from 'lucide-react';

type NavItem = {
  label: string;
  key: string;
};

interface DashboardNavbarProps {
  navItems: readonly NavItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

function DashboardNavbar(props: DashboardNavbarProps) {
  const { navItems, activeTab, onTabChange } = props;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0085CA] text-white flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-8">
        <div className="font-bold text-xl leading-tight">
          <div>recam</div>
          <div className="text-[5px] font-normal tracking-wider">SIMPLE SHOOT · PRO RESULTS</div>
        </div>

        <div className="flex space-x-2 font-semibold text-white ml-6 justify-start">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className={`px-4 py-2 rounded font-medium transition-colors duration-200
            ${activeTab === item.key ? 'bg-[#535bf2] text-white' : 'hover:bg-[#535bf2] text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="px-4 py-2 rounded font-medium transition-colors duration-200 text-white hover:bg-[#535bf2]"
        >
          <LogOut size={20} className="text-white" />
        </button>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
