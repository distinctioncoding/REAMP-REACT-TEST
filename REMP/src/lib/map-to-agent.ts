import { Agent, AgentByEmail } from "../interfaces/agent";

// getAllAgents和getAgentByEmail返回的json格式不用
export const mapToAgent = (data: AgentByEmail): Agent => ({
  id: data.id,
  firstName: data.agentFirstName,
  lastName: data.agentLastName,
  email: data.email,
  phoneNumber: data.phoneNumber,
  companyName: data.companyName,
  avatarUrl: data.avatarUrl
});
