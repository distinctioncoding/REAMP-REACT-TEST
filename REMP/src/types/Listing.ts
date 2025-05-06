export interface StatusLog {
    oldStatus: string;
    newStatus: string;
    updatedAt: string;
  }
  
  export interface Listing {
    id: number;
    street: string;
    city: string;
    state: string;
    postcode: number;
    createdAt: string;
    statusLogs: StatusLog[];
  }
  
  