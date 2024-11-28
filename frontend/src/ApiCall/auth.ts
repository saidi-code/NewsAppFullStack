import {
  ENDPOINT_CONFIG,
  LoginUserReq,
  LoginUserRes,
  RegisterUserReq,
  RegisterUserRes,
} from "../shared";

import { CallEndpoint } from ".";

export const LOCAL_STORAGE_JWT = "jwtToken";
export const LOCAL_STORAGE_USER_ID = "userId";

export const getLocalStorageJWT = (): string => {
  return localStorage.getItem(LOCAL_STORAGE_JWT) || "";
};
export const getLocalStorageUserId = (): string => {
  return localStorage.getItem(LOCAL_STORAGE_USER_ID) || "";
};

export const isLoggedIn = (): boolean => {
  const jwt = getLocalStorageJWT();
  return !!jwt;
};

export const signIn = async (login: string, password: string) => {
  const res = await CallEndpoint<LoginUserReq, LoginUserRes>(
    ENDPOINT_CONFIG.login,
    {
      login,
      password,
    }
  );
  localStorage.setItem(LOCAL_STORAGE_JWT, res.token);
  localStorage.setItem(LOCAL_STORAGE_USER_ID, res.user.id);
};

export const signUp = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  username: string
) => {
  const res = await CallEndpoint<RegisterUserReq, RegisterUserRes>(
    ENDPOINT_CONFIG.register,
    {
      firstname,
      lastname,
      email,
      password,
      username,
    }
  );
  localStorage.setItem(LOCAL_STORAGE_JWT, res.token);
  localStorage.setItem(LOCAL_STORAGE_USER_ID, res.userId);
};

export const signOut = () => {
  localStorage.removeItem(LOCAL_STORAGE_JWT);
  localStorage.removeItem(LOCAL_STORAGE_USER_ID);
};
