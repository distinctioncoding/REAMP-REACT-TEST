import apiClient from "./apiClient";

interface LoginRequest {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginRequest) => {
  const response = await apiClient.post("/User/login", {
    email,
    password,
  });
  return response.data.data;
};
