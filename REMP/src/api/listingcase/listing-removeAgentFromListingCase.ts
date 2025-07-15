import apiClient from "../apiClient";

export const removeAgentFromListingCase = async (
  listingCaseId: number,
  agentId: string
): Promise<void> => {
  await apiClient.request({
    method: 'DELETE',
    url: '/ListingCase/RemoveAgentFromListingCase',
    data: {
      listingCaseId,
      agentId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};