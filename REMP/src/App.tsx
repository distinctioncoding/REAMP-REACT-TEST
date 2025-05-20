import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAgentModel from './components/CreateAgentModel'
import { useState } from 'react';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import ListingDashboard from './components/ListingDashBoard';

// mock user token for testing
if (import.meta.env.DEV && !localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({
    token: 'user login token'
  }));
}

import HeroImageSelect from './components/HeroImageSelect';
import DashboardLayout from './components/DashboardLayout';
import { ListingCase } from './interfaces/listing-case';
// mock data for testing
const mockListing: ListingCase = {
  "id": 3,
  "title": "listcase3",
  "propertyType": 1,
  "saleCategory": 1,
  "street": "23/466 abcd Street",
  "city": "brisbane",
  "state": "QLD",
  "postcode": 2044,
  "price": 0,
  "bedrooms": 0,
  "bathrooms": 0,
  "garages": 0,
  "floorArea": 0,
  "userId": "afef80f8-33f3-40fe-8c41-bc3d51a6daa5",
  "listcaseStatus": 1,
  "createdAt": "2025-05-05T04:07:04.5072751",
  "isDeleted": false
};

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
        </Route>
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/dashboard" element={<ListingDashboard />} />
        <Route path="/dashboard2" element={<DashboardLayout />} /> 
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
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

        <Route path="/dashboard">
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



