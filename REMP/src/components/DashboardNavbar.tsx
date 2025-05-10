// src/components/DashboardNavbar.tsx
import { LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function DashboardNavbar() {
  const navItems = [
    { label: 'Listing Cases', to: '/dashboard/listings' },
    { label: 'Agents', to: '/dashboard/agents' },
    { label: 'Photography Companies', to: '/dashboard/companies' },
  ];

  return (
    <nav className="bg-[#0085CA] text-white flex items-center justify-between px-6 py-3">
      {/* Left Logo */}
      <div className="text-white font-bold text-xl leading-tight">
        <div>recam</div>
        <div className="text-xs font-normal tracking-wider">SIMPLE SHOOT · PRO RESULTS</div>
      </div>

      {/* Middle Nav Items */}
      <div className="flex space-x-8 font-semibold">
        {navItems.map((item) => (
          <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#535bf2]'
            }`
          }
        >
          {item.label}
        </NavLink>
        ))}
      </div>

      {/* Right Logout Icon */}
      <button className="text-white hover:opacity-80 transition">
        <LogOut size={20} />
      </button>
    </nav>
  );
}

export default DashboardNavbar;
