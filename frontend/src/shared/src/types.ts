export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  postedAt: Date;
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  postedAt: Date;
}
