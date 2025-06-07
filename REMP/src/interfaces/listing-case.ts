
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
  userId?: string;
  listcaseStatus: number;
  createdAt: string; 
  isDeleted?: boolean;
  description: string;
  longitude: number;
  latitude: number;
}

export interface MediaItem {
  id: number;
  mediaType: number;
  mediaUrl: string;
  uploadedAt: string;
  isSelect: boolean;
  isHero: boolean;
}


export interface MediaAssets {
  picture: MediaItem[];
  video: MediaItem[];
  floorPlan: MediaItem[];
  vrTour: MediaItem[];
}


export interface ListingCaseDetail extends ListingCase {
  mediaAssets: MediaAssets;
  caseContacts: any[];
  agents: any[];
}
