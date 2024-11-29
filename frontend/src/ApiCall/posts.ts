import {
  ENDPOINT_CONFIG,
  ListPostReq,
  ListPostRes,
  GetPosRes,
  GetPosReq,
  CountPostCommentReq,
  CountPostCommentRes,
  GetCommentListRes,
  GetCommentListReq,
  GetUserRes,
  GetUserReq,
  CreatePostRes,
  Post,
} from "../shared";

import { CallEndpoint } from ".";
import { CreatePostReq } from "@newsweb/shared";

export const getPosts = async (): Promise<ListPostRes> => {
  const res = await CallEndpoint<ListPostReq, ListPostRes>(
    ENDPOINT_CONFIG.getPosts,
    null
  );
  return res;
};

export const getPostCommentCount = async (
  postId: string
): Promise<CountPostCommentRes> => {
  const res = await CallEndpoint<CountPostCommentReq, CountPostCommentRes>(
    {
      ...ENDPOINT_CONFIG.getPostCommentCount,
      url: ENDPOINT_CONFIG.getPostCommentCount.url.replace(":postId", postId),
    },
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

export const getPostComment = async (
  postId: string
): Promise<GetCommentListRes> => {
  const res = await CallEndpoint<GetCommentListReq, GetCommentListRes>(
    {
      ...ENDPOINT_CONFIG.postCommentList,
      url: ENDPOINT_CONFIG.postCommentList.url.replace(":postId", postId),
    },
    null
  );
  return res;
};
export const getPostAuthor = async (userId: string): Promise<GetUserRes> => {
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
