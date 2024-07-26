import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  username: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});
