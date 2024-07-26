import { useContext } from "react";
import { login } from "../api/authApi";
import { register } from "../api/authApi";
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);
  const loginHandler = async (email, password) => {
    const {password:_, ...authData} = await login(email, password);
    changeAuthState(authData);
    // console.log(result);

    return authData;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);
  const registerHandler = async (email, password) => {
    const {password:_, ...authData} = await register(email, password);

    changeAuthState(authData);

    return authData;
  };
  return registerHandler;
};
