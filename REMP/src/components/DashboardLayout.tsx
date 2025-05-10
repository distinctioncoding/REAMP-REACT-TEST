import { useState } from 'react';
import { LogOut } from 'lucide-react';

const DashboardLayout = () => {
  const navItems = [
    { label: 'Listing Cases', key: 'listing' },
    { label: 'Agents', key: 'agents' },
    { label: 'Photography Companies', key: 'companies' },
  ];

  const [activeTab, setActiveTab] = useState('listing');

  const renderContent = () => {
    switch (activeTab) {
      case 'listing':
        return <div className="text-xl">This is the Listing Cases content.</div>;
      case 'agents':
        return <div className="text-xl">This is the Agents content.</div>;
      case 'companies':
        return <div className="text-xl">This is the Photography Companies content.</div>;
      default:
        return <div className="text-xl">Welcome to the dashboard.</div>;
    }
  };

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#0085CA] text-white flex items-center  justify-between px-6 py-3">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl leading-tight">
            <div>recam</div>
            <div className="text-[5px] font-normal tracking-wider">SIMPLE SHOOT · PRO RESULTS</div>
          </div>

          <div className="flex space-x-2 font-semibold text-white ml-6 justify-start">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`nav-button ${activeTab === item.key}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>


        <div className="flex items-center">
          <button className="nav-button">
            <LogOut size={20} className="text-white" />
          </button>
        </div>
      </nav>

      {/* 页面内容 */}
      <h1 className="p-6">{renderContent()}</h1>
    </div>
  );
};

export default DashboardLayout;
