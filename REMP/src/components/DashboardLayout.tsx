// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';

function DashboardLayout() {
  return (
    <div>
      <DashboardNavbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
