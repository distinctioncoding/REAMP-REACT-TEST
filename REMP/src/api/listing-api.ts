import { AxiosResponse } from "axios";
import { ListingCase } from "../interfaces/listing-case"
import apiClient from "./apiClient"
// get all listing case, can be any users, after assign to agent part finish, can be the agent user listingcase 
export const getListingCases = async():Promise<ListingCase[]> => {
  const response: AxiosResponse<ListingCase[]> = await apiClient.get('/ListingCase/listings');
  return response.data;
}

