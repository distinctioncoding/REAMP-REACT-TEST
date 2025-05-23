export interface updateAgentForm {
    id: string;
    email: string;
    agentFirstName: string;
    agentLastName: string;
    phoneNumber: string;
    companyName: string;
    avatarImage?: File | null;
}