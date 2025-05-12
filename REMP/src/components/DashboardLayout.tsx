import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';

const navItems = ['Listing', 'Agents', 'Photography companies'] as const;
type ButtonType = typeof navItems[number];

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState<ButtonType>('Listing');
  const renderContent = () => {
    switch (activeTab) {
      case 'Listing':
        return <div className="text-xl">This is the Listing Cases content.</div>;
      case 'Agents':
        return <div className="text-xl">This is the Agents content.</div>;
      case 'Photography companies':
        return <div className="text-xl">This is the Photography Companies content.</div>;
      default:
        return <div className="text-xl">Welcome to the dashboard.</div>;
    }
  };

  return (
    <div>
      <DashboardNavbar
        navItems={navItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="pt-16 px-6">{renderContent()}</div>
    </div>
  );
};

export default DashboardLayout;
