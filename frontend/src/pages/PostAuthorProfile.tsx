import { getUserPosts, getUser } from "../ApiCall/user";

import {
  HStack,
  Stack,
  Text,
  Image,
  VStack,
  Group,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PostCompo from "../components/Post";
import { Post } from "../shared";

const PostAuthorProfile = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useQuery(
    [`getauthorprofile${userId}`],
    async () => await getUser(userId!)
  );
  const {
    data: userPosts,
    error: errorUserPosts,
    isLoading: isLoadingUserPosts,
  } = useQuery(
    [`getuserposts${userId}`],
    async () => await getUserPosts(userId!)
  );
  if (isLoading || isLoadingUserPosts) return <p> "Loading..."</p>;
  if (error || errorUserPosts) return <p> "Error..."</p>;
  const user = data?.user;
  const posts = userPosts?.posts;
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem colSpan={1}>
        <VStack>
          <Image
            objectFit=""
            maxW="200px"
            rounded="sm"
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt={user?.firstname}
          />
          <Stack gap="0">
            <Text textStyle="md" color="fg.muted" fontWeight="bold">
              {"@"}
              {user?.username}
            </Text>
            <HStack>
              <Text color="fg.muted" fontWeight="bold">
                Name :
              </Text>
              <Group>
                <Text color="fg.muted">{user?.firstname}</Text>
                <Text color="fg.muted">{user?.lastname}</Text>
              </Group>
            </HStack>
            <HStack>
              <Text color="fg.muted" fontWeight="bold">
                Email :
              </Text>
              <Text color="fg.muted">{user?.email}</Text>
            </HStack>
          </Stack>
        </VStack>
      </GridItem>
      <GridItem colSpan={3}>
        {posts &&
          posts?.map((p: Post) => {
            return <PostCompo key={p.id} post={p} />;
          })}
      </GridItem>
    </Grid>
  );
};

export default PostAuthorProfile;
