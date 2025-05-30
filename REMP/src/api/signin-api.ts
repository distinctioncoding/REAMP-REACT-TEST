import apiClient from "./apiClient";

interface LoginRequest {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginRequest) => {
  const response = await apiClient.post("/User/login", {
    email,
    password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const userData = response.data.data;

  // ✅ Store actual token (and optionally role/email)
  localStorage.setItem('user', JSON.stringify({
    token: userData.token,
    role: userData.role,          // optional
    email: userData.email         // optional
  }));

  return userData;
};
