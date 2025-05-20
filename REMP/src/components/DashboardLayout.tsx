import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



const allNavItems = ['Listing', 'Agents', 'Photography companies'] as const;
type ButtonType = typeof allNavItems[number];

const DashboardLayout = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  if (!user) {
    navigate('/login');
    return null;
  }

  if (user.role === 'Agent') {
    navigate('/AgentPropertyPage');
    return null;
  }
  let navItems: readonly ButtonType[] = [];
  if (user.role === 'Admin') {
    navItems = ['Listing', 'Agents', 'Photography companies'];
  } else if (user.role === 'PhotographyCompany') {
    navItems = ['Listing', 'Agents'];
  }

  const [activeTab, setActiveTab] = useState<ButtonType>(navItems[0]);
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
