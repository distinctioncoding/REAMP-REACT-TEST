import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAgentModel from './components/CreateAgentModel'
import { useState } from 'react';

import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';

// mock user token for testing
if (import.meta.env.DEV && !localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({
    token: 'user login token'
  }));
}

import HeroImageSelect from './components/HeroImageSelect';

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



