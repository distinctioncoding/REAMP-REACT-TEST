import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import PropertyDetails from './components/PropertyDetails';
import HeroImageSelect from './components/HeroImageSelect';
import AgentsPage from './components/PhotoGraphyCompany/AgentsPage';
import DashboardLayout from './components/DashboardLayout';
import AddAgentByEmail from './components/PhotoGraphyCompany/AddAgentByEmail';
import PhotographyCompanyPortal from './components/PhotoGraphyCompany/PhotographyCompanyPortal';
import PreviewPage from './components/PropertyPreviewPage/PreviewPage';
import ChangePasswordPage from './components/AgentPropertyPage/ChangePasswordPage';
import CompanySignUpPage from './components/PhotoGraphyCompany/CompanySignUp';


const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/property/:listingId" element={<PropertyDetails />} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/dashboard" element={<DashboardLayout/>} />
        <Route path="/CompanySignUpPage" element={<CompanySignUpPage/>} />
        <Route path="/agentspage" element={<AgentsPage/>} />
        <Route path="/AddAgentByEmail" element={<AddAgentByEmail/>} />
        <Route path="/portal" element={<PhotographyCompanyPortal />} />
        <Route path="/preview/:id" element={<PreviewPage />} />

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