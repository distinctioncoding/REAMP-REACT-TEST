import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AgentPropertyPage } from './components/AgentPropertyPage/AgentPropertyPage';

// mock user token for testing
if (import.meta.env.DEV && !localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6aGFuZ2RlcGVuZyIsImp0aSI6IjA0MDIwNjZiLTdmMTgtNGZkYy1hOWIwLWU5N2JhNjZkN2RmMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiYWZlZjgwZjgtMzNmMy00MGZlLThjNDEtYmMzZDUxYTZkYWE1IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiemhhbmdkZXBlbmczQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwiZXhwIjoxNzQ3NDY5Mjg2LCJpc3MiOiJSRUNBTS1BUEkiLCJhdWQiOiJsb2NhbGhvc3QzMDAwIn0.7Y_e_BVtvc196BVmnBATBqPSk3ufBd1LfYRTMif1nnM'
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
