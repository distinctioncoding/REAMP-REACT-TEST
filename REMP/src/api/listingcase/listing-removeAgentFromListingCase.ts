import apiClient from "../apiClient";

export interface RemoveAgentFromListingCaseDto {
  agentId: string;
  listingCaseId: number;
}

export const removeAgentFromListingCase = (
  agentId: string,
  listingCaseId: number
): Promise<void> => {
  const data: RemoveAgentFromListingCaseDto = {
    agentId,
    listingCaseId,
  };

  return apiClient.delete('/ListingCase/RemoveAgentFromListingCase', {data});
};
