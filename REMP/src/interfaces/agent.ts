interface BaseAgent {
  id: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  avatarUrl?: string;
}

interface FullName {
  firstName: string;
  lastName: string;
}

interface AgentNameByEmail {
  agentFirstName: string;
  agentLastName: string;
}

export type Agent = BaseAgent & FullName;
export type AgentByEmail = BaseAgent & AgentNameByEmail;
