export const ROUTES = {
  HOME: "/",
  POST: (postId: string) => `post/${postId}`,
  POSTNEW: "/post/new",
  LOGIN: "/login",
  REGISTER: "/register",
  POSTAUTHORPROFILE: (userId: string) => `/post/author/profile/${userId}`,
};
