import { HStack, VStack, Text, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../components/ui/skeleton";
import { Avatar } from "./ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../ApiCall/user";
import { Link } from "react-router-dom";

interface CommentAuthorType {
  userId: string;
}
const CommentAuthor = ({ userId }: CommentAuthorType) => {
  const { data, error, isLoading } = useQuery(
    [`getcommentauthor${userId}`],
    () => getUser(userId)
  );
  const commentAuthor = data?.user;
  // Display a loading skeleton while fetching the data
  if (isLoading) {
    return (
      <HStack gap="5">
        <SkeletonCircle size="10" />
        <Stack flex="1">
          <Skeleton height="4" />
          <Skeleton height="4" width="50%" />
        </Stack>
      </HStack>
    );
  }

  // Handle errors (optional, based on your requirements)
  if (error) {
    return (
      <Text color="red.500" fontWeight="bold">
        Failed to load author information.
      </Text>
    );
  }

  // Render the post author details
  return (
    <HStack gap="3">
      {/* commentAuthor?.avatarUrl || */}
      <Avatar
        size="sm"
        src={`https://placehold.co/600x400?text=${commentAuthor?.firstname[0]}+${commentAuthor?.firstname[0]}`}
        name={commentAuthor?.firstname || "Unknown"}
      />
      <VStack spacing="0" gap="0">
        <HStack gap="1" justifyContent="start" spacing="0" m="0">
          <Text fontWeight="semibold" textStyle="xs">
            {commentAuthor?.firstname || "Anonymous"}
          </Text>
          <Text textAlign="start" fontWeight="semibold" textStyle="xs">
            {commentAuthor?.lastname || "Anonymous"}
          </Text>
        </HStack>

        <Link to={`/post/author/profile/${userId}`}>
          <Text
            display="block"
            textAlign="start"
            width="full"
            color="fg.muted"
            textStyle="xs"
            variant="underline"
          >
            @{commentAuthor?.username || "user"}
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
};

export default CommentAuthor;
