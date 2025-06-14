// src/interfaces/CaseContact.ts
export interface CaseContactRequestDto {
  firstName: string;
  lastName: string;
  companyName?: string;
  profileUrl?: string;
  email?: string;
  phoneNumber?: string;
  listingCaseId: number;
}

export interface CaseContactResponseDto {
  firstName: string;
  lastName: string;
  companyName?: string;
  profileUrl?: string;
  email?: string;
  phoneNumber?: string;
  listingCaseId: number;
}
