import api from "./api";

// Login
export const loginUser = (email, password) => {
  return api.post("/auth/login", {
    email,
    password,
  });
};

// Register
export const registerUser = (fullName, email, password) => {
  return api.post("/auth/register", {
    fullName,
    email,
    password,
  });
};