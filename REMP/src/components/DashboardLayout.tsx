import { useState, useEffect} from 'react';
import DashboardNavbar from './DashboardNavbar';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PhotographyCompanyDashboard from './PhotographyCompanyDashboard';
import AgentList from './AgentList/AgentList';
import ListingDashboard from './ListingDashboard/ListingDashboard';




const allNavItems = ['Listing', 'Agents', 'Photography companies'] as const;
type ButtonType = typeof allNavItems[number];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role === 'Agent') {
      navigate('/AgentPropertyPage');
    }
  }, [user, navigate]);
  
  if (!user || user.role === 'Agent') {
    return null; // don't render anything during redirection
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
        return <ListingDashboard />;
      case 'Agents':
        return <AgentList />;
      case 'Photography companies':
        return <PhotographyCompanyDashboard />;
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