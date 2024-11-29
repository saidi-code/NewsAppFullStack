export const BASE_URL: string = "http://134.122.27.174/api/v1";
export type endpointConfig = {
  url: string;
  method: "PATCH" | "GET" | "POST" | "DELETE";
  auth?: boolean;
  sensitive?: boolean;
};
export enum endpoints {
  health = "health",
  login = "login",
  register = "register",
  //posts
  getPosts = "getPosts",
  getPost = "getPost",
  createPost = "createPost",
  deletePost = "deletePost",
  updatePost = "updatePost",

  //user
  getUser = "getUser",
  getUserPost = "getUserPost",

  //comments
  createComment = "createComment",
  getPostCommentList = "postCommentList",
  updateComment = "updateComment",
  deleteComment = "deleteComment",
  getPostCommentCount = "getPostCommentCount",

  //likes
  addLike = "addLike",
  deleteLike = "deleteLike",
}
export const ENDPOINT_CONFIG: { [key in endpoints]: endpointConfig } = {
  [endpoints.health]: {
    url: `/healthz`,
    method: "GET",
    auth: false,
  },
  [endpoints.login]: {
    url: `/users/login`,
    method: "POST",
    auth: false,
  },
  [endpoints.register]: {
    url: `/users/register`,
    method: "POST",
    auth: false,
  },
  [endpoints.getPosts]: {
    url: `/posts`,
    method: "GET",
    auth: false,
  },
  [endpoints.getPost]: {
    url: `/posts/:postId`,
    method: "GET",
    auth: false,
  },
  [endpoints.createPost]: {
    url: `/posts`,
    method: "POST",
    auth: true,
  },
  [endpoints.updatePost]: {
    url: `/posts/:postId`,
    method: "PATCH",
    auth: true,
  },
  [endpoints.deletePost]: {
    url: `/posts/:postId`,
    method: "DELETE",
    auth: true,
  },
  [endpoints.getPostCommentCount]: {
    url: `/posts/comment/count/:postId`,
    method: "GET",
    auth: false,
  },
  [endpoints.getPostCommentList]: {
    url: `/comments/:postId`,
    method: "GET",
    auth: false,
  },
  [endpoints.getUser]: {
    url: `/user/:userId`,
    method: "GET",
    auth: false,
  },
  [endpoints.getUserPost]: {
    url: `/user/posts/:userId`,
    method: "GET",
    auth: false,
  },
  [endpoints.createComment]: {
    url: `/comments/:postId`,
    method: "POST",
    auth: true,
  },
  [endpoints.updateComment]: {
    url: `/comments/:commentId`,
    method: "PATCH",
    auth: true,
  },
  [endpoints.deleteComment]: {
    url: `/comments/:commentId`,
    method: "DELETE",
    auth: true,
  },
  [endpoints.addLike]: {
    url: `/:postId`,
    method: "POST",
    auth: true,
  },
  [endpoints.deleteLike]: {
    url: `/:postId`,
    method: "DELETE",
    auth: true,
  },
};
