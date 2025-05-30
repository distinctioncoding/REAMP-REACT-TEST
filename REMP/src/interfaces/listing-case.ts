
export interface ListingCase {
  id: number;
  title: string;
  propertyType: number;
  saleCategory: number;
  street: string;
  city: string;
  state: string;
  postcode: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  floorArea: number;
  userId: string;
  listcaseStatus: number;
  createdAt: string; 
  isDeleted: boolean;
  description: string;
  longitude: number;
  latitude: number;
}



