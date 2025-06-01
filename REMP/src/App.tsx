import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import ListingDashboard from './components/ListingDashboard';

import PropertyModalContainer from './components/PropertyModalContainer';

import HeroImageSelect from './components/HeroImageSelect';
import AgentsPage from './components/PhotoGraphyCompany/AgentsPage';
import DashboardLayout from './components/DashboardLayout';
import AddAgentByEmail from './components/PhotoGraphyCompany/AddAgentByEmail';
import ListingDashboard from './components/ListingDashBoard/ListingDashboard';
import PropertyBanner from './components/PropertyBanner';
import ConpanySignUpPage from './components/PhotoGraphyCompany/ConpanySignUp';

const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));


function App() {

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const closeModal = () => setModalVisible(false);

  const [isPropertyModalVisible, setPropertyModalVisible] = useState(false);
  const closePropertyModal = () => setPropertyModalVisible(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            {/*  mock */}
             <button onClick={()=>setModalVisible(true)}>Open Create Agent</button>
             <CreateAgentModel isVisible={isModalVisible} onClose={closeModal}></CreateAgentModel>

             <button onClick={() => setPropertyModalVisible(true)} className="ml-4">
              Open Property Modal
            </button>
            {isPropertyModalVisible && (
              <PropertyModalContainer onClose={closePropertyModal} />
            )}
          </>
        } />

        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/dashboard" element={<ListingDashboard />} />
        <Route path="/property/:listingId" element={<PropertyDetails />} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/DashboardLayout" element={<DashboardLayout/>} />
        <Route path="/PropertyBanner" element={<PropertyBanner/>} />
        <Route path="/ConpanySignUpPage" element={<ConpanySignUpPage/>} />
        <Route path="/agentspage" element={<AgentsPage/>} />
        <Route path="/AddAgentByEmail" element={<AddAgentByEmail/>} />

        <Route
          path="/hero-select"
          element={
            <HeroImageSelect
              images={mockImages}
              onSave={(img) => console.log('Selected image:', img)}
              onCancel={() => console.log('Cancelled')}
            />
          }
        />
      </Routes>
    </BrowserRouter>

    

    
  );
}

export default App;