import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../contexts/AuthContext";
import { getAgentByEmail } from "../../api/get-agent-by-email";
import { useEffect, useState } from "react";
import { Agent } from "../../interfaces/agent";


const NavBar = () => {
  const { user } = useAuth();
  const [agent, setAgent] = useState<Agent | null>(null);
  useEffect(()=>{
    const fetchAgent = async()=>{
      if(user?.email){
        const result = await getAgentByEmail(user.email);
        setAgent(result)
      }
    };
    fetchAgent()
  },[user?.email])
  const userName = agent?.firstName??"Unknown";
  
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

