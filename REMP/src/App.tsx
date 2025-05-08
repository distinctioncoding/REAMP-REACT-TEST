import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyCard from './components/PropertyCard'; 
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
