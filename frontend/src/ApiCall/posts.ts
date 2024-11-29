import {
  ENDPOINT_CONFIG,
  ListPostReq,
  ListPostRes,
  GetPosRes,
  GetPosReq,
  CreatePostRes,
  Post,
} from "../shared";

import { CallEndpoint } from ".";

export const getPosts = async (): Promise<ListPostRes> => {
  const res = await CallEndpoint<ListPostReq, ListPostRes>(
    ENDPOINT_CONFIG.getPosts,
    null
  );
  return res;
};

export const getPost = async (postId: string): Promise<GetPosRes> => {
  const res = await CallEndpoint<GetPosReq, GetPosRes>(
    {
      ...ENDPOINT_CONFIG.postCommentList,
      url: ENDPOINT_CONFIG.getPost.url.replace(":postId", postId),
    },
    null
  );
  return res;
};

export const createPost = async (
  postTitle: string,
  postUrl: string
): Promise<CreatePostRes> => {
  const res = await CallEndpoint<Pick<Post, "title" | "url">, CreatePostRes>(
    ENDPOINT_CONFIG.createPost,
    {
      title: postTitle,
      url: postUrl,
    }
  );
  console.log(res);
  return res;
};
