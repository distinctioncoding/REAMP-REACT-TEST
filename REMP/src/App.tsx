import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyCard from './components/PropertyCard'; 
import { Listing } from './types/Listing';
const mockListing: Listing = {
  id: 1,
  street: "11/33-37 Gray Street",
  city: "Kogarah",
  state: "NSW",
  postcode: 2217,
  createdAt: "2025-04-27T12:00:00Z",
  statusLogs: [
    {
      oldStatus: "Hello",
      newStatus: "Created",
      updatedAt: "2025-04-27T12:00:00Z"
    }
  ]
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/property" element={<PropertyCard listing={mockListing} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
