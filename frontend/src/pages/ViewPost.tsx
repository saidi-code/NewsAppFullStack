import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPost, getPostComment } from "../ApiCall/posts";
import PostCompo from "../components/Post";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

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
          <Box
            borderRadius="md"
            bg="bg.muted"
            mt="8px"
            height="100px"
            width="full"
            key={index}
            p={4}
            borderBottom="1px solid #eaeaea"
          >
            <Text>{comment.comment}</Text>
          </Box>
        ))
      ) : (
        <Text fontStyle="md">No comments available.</Text>
      )}
    </Box>
  );
};

export default ViewPost;
