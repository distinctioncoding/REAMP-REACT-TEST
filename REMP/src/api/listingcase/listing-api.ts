import { AxiosResponse } from "axios";
import { ListingCase, ListingCaseDetail } from "../../interfaces/listing-case";
import apiClient from "../apiClient";


/**
 * Retrieves all listing cases.
 * Can be called by any user. After assignment to an agent is complete,
 * it returns the list for the assigned agent user.
 *
 * @returns {Promise<ListingCase[]>} A promise resolving to an array of listing cases.
 */

export const getListingCases = async():Promise<ListingCase[]> => {
  const response: AxiosResponse<ListingCase[]> = await apiClient.get('/ListingCase/listings');
  return response.data;
}

// Get one listing case by ID (with media assets)
export const getListingCaseDetail = async (id: number): Promise<ListingCaseDetail> => {
  const response: AxiosResponse<ListingCaseDetail> = await apiClient.get(`/ListingCase/${id}`);
  return response.data;
};
