import {
  CountPostCommentReq,
  CountPostCommentRes,
  ENDPOINT_CONFIG,
  GetCommentListReq,
  GetCommentListRes,
  CreateCommentReq,
  CreateCommentRes,
} from "../shared";
import { CallEndpoint } from ".";

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
export const creatComment = async (
  postId: string,
  comment: string
): Promise<CreateCommentRes> => {
  const res = await CallEndpoint<CreateCommentReq, CreateCommentRes>(
    {
      ...ENDPOINT_CONFIG.createComment,
      url: ENDPOINT_CONFIG.createComment.url.replace(":postId", postId),
    },
    {
      comment: comment,
    }
  );
  return res;
};
