import apiClient from "../apiClient";

export const assignAgentToListing = async (listingCaseId: number, agentId: string): Promise<void> => {
  const res = await apiClient.post('http://localhost:5181/api/ListingCase/AddAgentToListingCase', {
    agentId, 
    listingCaseId,
  });

  if (!res.data.success) {
    throw new Error(res.data.message || 'Failed to assign agent');
  }
};