import { Agent } from "../interfaces/agent";
import apiClient from "./apiClient";

export const getAgentByEmail = async (email: string): Promise<Agent> => {
  const response = await apiClient.get(`User/FindAgentByEmail/${email}`);
  return response.data;
};