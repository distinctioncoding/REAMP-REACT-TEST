export interface Agent {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    companyName:string;
    avatarUrl?:string;
}

export interface AgentByEmail {
    id:string;
    agentFirstName:string;
    agentLastName:string;
    email:string;
    phoneNumber:string;
    companyName:string;
    avatarUrl?:string;
}