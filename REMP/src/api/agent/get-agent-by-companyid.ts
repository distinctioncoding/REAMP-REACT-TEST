import { Agent } from "../../interfaces/agent-response";
import apiClient from "../apiClient";

export const getAgentsByCompanyId = async (): Promise<Agent[]> => {
  const res = await apiClient.get('/PhotographyCompany/');
  return res.data;
};