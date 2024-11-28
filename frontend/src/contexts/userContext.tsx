import { getCurrentUser } from "../ApiCall/user";
import { useQuery } from "@tanstack/react-query";
import { useContext, createContext, ReactNode } from "react";
import { GetUserRes } from "@/shared";

import { getLocalStorageUserId, isLoggedIn } from "../ApiCall/auth";

type UserContext = {
  currentUser?: GetUserRes;
  refreshCurrentUser: () => void;
};

type CurrentUserContextProviderProps = {
  children: ReactNode;
};

export const userContext = createContext({} as UserContext);
export const useCurrentUser = () => useContext(userContext);

export const CurrentUserContextProvider = ({
  children,
}: CurrentUserContextProviderProps): JSX.Element => {
  const userId: string = getLocalStorageUserId();
  const { data: currentUser, refetch: refreshCurrentUser } = useQuery(
    ["getCurrentUser"],
    async () => await getCurrentUser(userId),
    {
      enabled: isLoggedIn(),
    }
  );
  return (
    <userContext.Provider value={{ currentUser, refreshCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
