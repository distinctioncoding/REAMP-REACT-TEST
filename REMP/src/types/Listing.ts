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
}

export enum ListcaseStatus {
  Created = 1,
  Pending = 2,
  Delivered = 3,
}

export const getStatusLabel = (status: ListcaseStatus): string => {
  switch (status) {
    case ListcaseStatus.Created:
      return 'Created';
    case ListcaseStatus.Pending:
      return 'Pending';
    case ListcaseStatus.Delivered:
      return 'Delivered';
    default:
      return 'Unknown';
  }
};