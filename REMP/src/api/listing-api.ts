import { AxiosResponse } from "axios";
import { ListingCase } from "../interfaces/listing-case"
import apiClient from "./apiClient"

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

