import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';


// import HeroImageSelect from './components/HeroImageSelect';
// import DashboardLayout from './components/DashboardLayout';


import HeroImageSelect from './components/HeroImageSelect';
import AgentList from './components/AgentList/AgentList';
import DashboardLayout from './components/DashboardLayout';
// const mockImages = Array.from({ length: 25 }, (_, i) => `https://picsum.photos/seed/${i}/150`);
// const mockImages = Array.from({ length: 25 }, (_, i) => `/drop.webp?id=${i}`);

const mockImages = Array.from({ length: 25 }, (_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/seed/${i}/150`
}));


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
        <Route path="/AgentList" element={<AgentList />} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/DashboardLayout" element={<DashboardLayout/>} />
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



