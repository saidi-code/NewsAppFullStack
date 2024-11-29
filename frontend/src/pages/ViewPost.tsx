import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../ApiCall/posts";
import { getPostComment } from "../ApiCall/comment";
import PostCompo from "../components/Post";
import { Box, Text } from "@chakra-ui/react";
import CommentComp from "../components/Comment";

const ViewPost = () => {
  const { postId } = useParams();

  // Fetch post data
  const {
    data: postData,
    error: postError,
    isLoading: isPostLoading,
  } = useQuery(["getpost", postId], async () => await getPost(postId!));

  // Fetch comments data
  const {
    data: commentData,
    error: commentError,
    isLoading: isCommentLoading,
  } = useQuery(
    ["getpostcomments", postId],
    async () => await getPostComment(postId!)
  );

  // Loading states
  if (isPostLoading || isCommentLoading) {
    return <div>Loading...</div>;
  }

  // Error states
  if (postError) {
    return <div>Error loading post.</div>;
  }
  if (commentError) {
    return <div>Error loading comments.</div>;
  }

  // Extract post and comments
  const post = postData?.post;
  const comments = commentData?.comments;

  return (
    <Box width="2xl">
      {/* Render post */}
      {post && <PostCompo post={post} />}

      {/* Render comments */}
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentComp comment={comment} key={comment.id} />
        ))
      ) : (
        <Text fontStyle="md">No comments available.</Text>
      )}
    </Box>
  );
};

export default ViewPost;
