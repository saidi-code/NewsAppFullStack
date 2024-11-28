import { ENDPOINT_CONFIG, GetUserRes, GetUserReq } from "../shared";

import { CallEndpoint } from ".";
export const getCurrentUser = async (userId: string): Promise<GetUserRes> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res = await CallEndpoint<GetUserReq, GetUserRes>(
    {
      ...ENDPOINT_CONFIG.getUser,
      url: ENDPOINT_CONFIG.getUser.url.replace(":userId", userId),
    },
    null
  );
  return res;
};
