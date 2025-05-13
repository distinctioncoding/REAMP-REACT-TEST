import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';
import ListingDashboard from './components/ListingDashBoard';

// mock user token for testing
if (import.meta.env.DEV && !localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({
    token: 'user login token'
  }));
}

import HeroImageSelect from './components/HeroImageSelect';
const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <> 
          </>
        } />
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/dashboard" element={<ListingDashboard />} />
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
