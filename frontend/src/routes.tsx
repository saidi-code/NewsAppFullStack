export const ROUTES = {
  HOME: "/",
  POST: (postId: string) => `post/${postId}`,
  POSTNEW: "/post/new",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: (userId: string) => `/profile/${userId}`,
};
