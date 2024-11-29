import { ENDPOINT_CONFIG, GetUserRes, GetUserReq, Post } from "../shared";

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
export const getUserPosts = async (
  userId: string
): Promise<{ posts: Post[] }> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res = await CallEndpoint<null, { posts: Post[] }>(
    {
      ...ENDPOINT_CONFIG.getUserPost,
      url: ENDPOINT_CONFIG.getUserPost.url.replace(":userId", userId),
    },
    null
  );
  return res;
};

export const getUser = async (userId: string): Promise<GetUserRes> => {
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
