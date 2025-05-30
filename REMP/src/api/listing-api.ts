import { AxiosResponse } from "axios";
import { ListingCase } from "../interfaces/listing-case"
import { ListingCaseDetail } from "../interfaces/ListingCaseDetail"
import apiClient from "./apiClient"

// get all listing case, can be any users, after assign to agent part finish, can be the agent user listingcase 
export const getListingCases = async():Promise<ListingCase[]> => {
  const response: AxiosResponse<ListingCase[]> = await apiClient.get('/ListingCase/listings');
  return response.data;
}

// Get one listing case by ID (with media assets)
export const getListingCaseDetail = async (id: number): Promise<ListingCaseDetail> => {
  const response: AxiosResponse<ListingCaseDetail> = await apiClient.get(`/ListingCase/${id}`);
  return response.data;
};
