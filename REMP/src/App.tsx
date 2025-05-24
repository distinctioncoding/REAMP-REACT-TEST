import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAgentModel from './components/CreateAgentModel'
import { useState } from 'react';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import ListingDashboard from './components/ListingDashboard';


import HeroImageSelect from './components/HeroImageSelect';
import DashboardLayout from './components/DashboardLayout';
import PhotographyCompanyDashboard from './components/PhotographyCompanyDashboard';
import AgentList from './components/AgentList/AgentList';

// const mockImages = Array.from({ length: 25 }, (_, i) => `https://picsum.photos/seed/${i}/150`);
// const mockImages = Array.from({ length: 25 }, (_, i) => `/drop.webp?id=${i}`);

const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));


function App() {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const closeModal = () => setModalVisible(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            {/*  mock */}
             <button onClick={()=>setModalVisible(true)}>Open Create Agent</button>
             <CreateAgentModel isVisible={isModalVisible} onClose={closeModal}></CreateAgentModel>
          </>
        } />
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/dashboard" element={<ListingDashboard />} />
        <Route path="/login" element={<SignInPage/>} />
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



