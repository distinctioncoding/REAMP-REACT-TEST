import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user } = useAuth();
  const userName = user?.name ?? "Unknown";
  
  return (
    <nav className="w-full px-32 py-4 bg-white">
      <div className="text-sm text-gray-500 text-left">Hi, <span className="font-medium">{userName}</span></div>

      <div className="flex items-center justify-between mt-2">
        <h1 className="text-lg font-semibold text-gray-800">My Order</h1>
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search My Order"
            className="pl-10 pr-4 py-2 rounded-full text-gray-500 bg-gray-200 text-sm focus:outline-none"
          />
      </div>
</div>
    </nav>
  );
};

export default NavBar;

