import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import PropertyDetails from './components/PropertyDetails';
import HeroImageSelect from './components/HeroImageSelect';
import AgentsPage from './components/PhotoGraphyCompany/AgentsPage';
import DashboardLayout from './components/DashboardLayout';
import AddAgentByEmail from './components/PhotoGraphyCompany/AddAgentByEmail';
<<<<<<< HEAD
import ListingDashboard from './components/ListingDashboard/ListingDashboard';
import PropertyBanner from './components/PropertyBanner';
import ConpanySignUpPage from './components/PhotoGraphyCompany/ConpanySignUp';
import PhotographyCompanyPortal from './components/PhotoGraphyCompany/PhotographyCompanyPortal';
=======
import ListingDashboard from './components/ListingDashBoard/ListingDashboard';
import ConpanySignUpPage from './components/PhotoGraphyCompany/ConpanySignUp';
import PhotographyCompanyDashboard from './components/PhotographyCompanyDashboard';
import PreviewPage from './components/PropertyPreviewPage/PreviewPage';
>>>>>>> f39044cecfa600ccdc738242172c26d39d446378

const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/dashboard" element={<ListingDashboard />} />
        <Route path="/property/:listingId" element={<PropertyDetails />} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/DashboardLayout" element={<DashboardLayout/>} />
        <Route path="/ConpanySignUpPage" element={<ConpanySignUpPage/>} />
        <Route path="/agentspage" element={<AgentsPage/>} />
        <Route path="/AddAgentByEmail" element={<AddAgentByEmail/>} />
<<<<<<< HEAD
        <Route path="/portal" element={<PhotographyCompanyPortal />} />

=======
        <Route path="/PreviewPage" element={<PreviewPage/>} />
>>>>>>> f39044cecfa600ccdc738242172c26d39d446378

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