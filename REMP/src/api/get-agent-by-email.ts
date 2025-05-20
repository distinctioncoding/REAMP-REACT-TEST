import { Agent, AgentByEmail } from "../interfaces/agent";
import apiClient from "./apiClient";
// getAllAgents和getAgentByEmail返回的json格式不用
const mapToAgent = (data: AgentByEmail):Agent =>({
    id: data.id,
    firstName: data.agentFirstName,
    lastName: data.agentLastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    companyName: data.companyName,
    avatarUrl: data.avatarUrl
})
export const getAgentByEmail = async (email: string): Promise<Agent> => {
  const response = await apiClient.get(`User/FindAgentByEmail/${email}`);
  return mapToAgent(response.data);
};