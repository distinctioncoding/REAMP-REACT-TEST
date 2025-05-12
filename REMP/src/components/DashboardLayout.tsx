import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayout = () => {

  const [activeTab, setActiveTab] = useState('listing');

  const navItems = [
    { label: 'Listing Cases', key: 'listing' },
    { label: 'Agents', key: 'agents' },
    { label: 'Photography Companies', key: 'companies' },
  ] as const;

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
      <DashboardNavbar navItems={navItems} activeTab={activeTab} onTabChange={setActiveTab} />
      {/* 页面内容(switch) */}
      <div className="pt-16 px-6">{renderContent()}</div>
    </div>
  );
};

export default DashboardLayout;
