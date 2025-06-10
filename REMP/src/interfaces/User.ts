export interface User {
  id: string;
  email: string;
}

export interface UpdatePasswordDTO {
  currentPassword: string;
  newPassword: string;
}