interface BaseAgentForm {
  email: string;
  agentFirstName: string;
  agentLastName: string;
  phoneNumber: string;
  companyName: string;
  avatarImage?: File | null;
}

export interface createAgentForm extends BaseAgentForm {}

export interface updateAgentForm extends BaseAgentForm {
  id: string;
}
