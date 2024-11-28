import { Post, User, Comment } from "./types";
//Post APIs
export type ListPostReq = null;
export interface ListPostRes {
  posts: Post[];
}

export type CreatePostReq = Pick<Post, "title" | "url" | "postedAt" | "userId">;
export type CreatePostRes = null;

export type GetPosReq = null;
export interface GetPosRes {
  post: Post | null;
}

export type DeletePostReq = null;
export type DeletePostRes = null;

export type UpdatePostReq = Pick<Post, "title" | "url">;

export type UpdatePostRes = null;

export type CountPostCommentReq = null;
export interface CountPostCommentRes {
  count: number;
}
//Auth Api
export type RegisterUserReq = Pick<
  User,
  "firstname" | "lastname" | "email" | "password" | "username"
>;
export interface RegisterUserRes {
  token: string;
  userId: string;
}

export interface LoginUserReq {
  login: string;
  password: string;
}
export type LoginUserRes = {
  user: Pick<User, "firstname" | "lastname" | "email" | "id" | "username">;
  token: string;
};

//User Api
export type GetUserReq = null;
export type GetUserRes = {
  user: Pick<
    User,
    "firstname" | "lastname" | "email" | "id" | "username"
  > | null;
};

export type GetUserProfileReq = null;
export interface GetUserProfileRes {
  user: Pick<
    User,
    "firstname" | "lastname" | "email" | "id" | "username"
  > | null;
}

//comment Api
export type CreateCommentReq = Pick<Comment, "comment">;
export type CreateCommentRes = null;

export type GetCommentListReq = null;
export interface GetCommentListRes {
  comments: Comment[];
}

export interface UpdateCommentReq {
  comment: string;
}
export type UpdateCommentRes = null;

export type DeleteCommentReq = null;
export type DeleteCommentRes = null;

export type AddLikeReq = null;
export type AddLikeRes = null;
