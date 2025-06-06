export interface Address {
  street: string;
  city: string;
  state: string;
  postcode: string;
  latitude: number;
  longitude: number;
  formattedAddress?: string;
}