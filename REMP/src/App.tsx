import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
function App() {
  return (
    <BrowserRouter>
      {/* 你可以稍后在这里添加 <Routes> 和 <Route> */}
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App