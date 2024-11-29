import { HStack, VStack, Text, LinkBox, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../components/ui/skeleton";
import { Avatar } from "./ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getPostAuthor } from "../ApiCall/posts";
import { Link } from "react-router-dom";

interface PostAuthorType {
  userId: string;
}

const PostAuthor = ({ userId }: PostAuthorType) => {
  const { data, error, isLoading } = useQuery([`getpostauthor${userId}`], () =>
    getPostAuthor(userId)
  );

  const postAuthor = data?.user;

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
      {/* postAuthor?.avatarUrl || */}
      <Avatar
        src={`https://placehold.co/600x400?text=${postAuthor?.firstname[0]}+${postAuthor?.firstname[0]}`}
        name={postAuthor?.firstname || "Unknown"}
      />
      <VStack spacing="0" gap="0">
        <HStack gap="1" spacing="0">
          <Text fontWeight="semibold" textStyle="sm">
            {postAuthor?.firstname || "Anonymous"}
          </Text>
          <Text fontWeight="semibold" textStyle="sm">
            {postAuthor?.lastname || "Anonymous"}
          </Text>
        </HStack>

        <Link to={`/post/author/profile/${userId}`}>
          <Text
            display="block"
            width="full"
            align="start"
            color="fg.muted"
            textStyle="sm"
            variant="underline"
          >
            @{postAuthor?.username || "user"}
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
};

export default PostAuthor;
