import { Box, Text } from "@chakra-ui/react";
import { Comment as CommentType } from "../shared";
import CommentAuthor from "./CommentAuthor";
interface CommentProps {
  comment: CommentType;
}
const Comment = ({ comment }: CommentProps) => {
  return (
    <Box
      borderRadius="md"
      bg="bg.muted"
      mt="8px"
      height="100px"
      width="full"
      p={4}
      borderBottom="1px solid #eaeaea"
    >
      <CommentAuthor userId={comment.userId} />
      <Text mt="3">{comment.comment}</Text>
    </Box>
  );
};

export default Comment;
