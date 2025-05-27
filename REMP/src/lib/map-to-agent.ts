import { updateAgentForm } from "../interfaces/agent-request";
import { Agent, AgentByEmail } from "../interfaces/agent-response";


// getAllAgents和getAgentByEmail返回的json格式不用
export const mapEamilReturnToAgent = (agent: AgentByEmail): Agent => ({
  id: agent.id,
  firstName: agent.agentFirstName,
  lastName: agent.agentLastName,
  email: agent.email,
  phoneNumber: agent.phoneNumber,
  companyName: agent.companyName,
  avatarUrl: agent.avatarUrl
export const mapEamilReturnToAgent = (agent: AgentByEmail): Agent => ({
  id: agent.id,
  firstName: agent.agentFirstName,
  lastName: agent.agentLastName,
  email: agent.email,
  phoneNumber: agent.phoneNumber,
  companyName: agent.companyName,
  avatarUrl: agent.avatarUrl
});


export const mapAgentToUpdateForm = (agent:Agent):updateAgentForm => ({
  id: agent.id,
  email: agent.email,
  phoneNumber: agent.phoneNumber,
  companyName: agent.companyName,
  agentFirstName: agent.firstName,
  agentLastName: agent.lastName,
  avatarImage: null,
})

export const mapAgentToUpdateForm = (agent:Agent):updateAgentForm => ({
  id: agent.id,
  email: agent.email,
  phoneNumber: agent.phoneNumber,
  companyName: agent.companyName,
  agentFirstName: agent.firstName,
  agentLastName: agent.lastName,
  avatarImage: null,
})