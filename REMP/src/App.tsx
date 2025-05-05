import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyCard from './components/PropertyCard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/property" element={<PropertyCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
