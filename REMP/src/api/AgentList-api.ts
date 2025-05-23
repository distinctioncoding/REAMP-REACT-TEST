import { AgentData } from "../types/Agent";
import apiClient from "./apiClient";


export const getAgentsByCompany = async (): Promise<AgentData[]> => {
  const response = await apiClient.get<AgentData[]>('/agents/company');
  return response.data;
};
