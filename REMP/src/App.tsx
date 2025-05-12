import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';

// mock user token for testing
if (import.meta.env.DEV && !localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({
    token: 'user login token'
  }));
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            
          </>
        } />

        <Route path="/AgentPropertyPage" element={<AgentPropertyPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
