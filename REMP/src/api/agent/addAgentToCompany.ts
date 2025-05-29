import apiClient from "../apiClient";

export const addAgentToCompany = async (agentId: string): Promise<void> => {
  await apiClient.post(`/PhotographyCompany/AddAgent`, { agentId });
};