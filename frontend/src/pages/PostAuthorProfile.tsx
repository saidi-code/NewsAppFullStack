import { getPostAuthor } from "../ApiCall/posts";
import { Avatar } from "../components/ui/avatar";
import {
  Center,
  HStack,
  Stack,
  Text,
  Image,
  VStack,
  Group,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const PostAuthorProfile = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useQuery(
    [`getauthorprofile${userId}`],
    async () => await getPostAuthor(userId!)
  );
  if (isLoading) return <p> "Loading..."</p>;
  if (error) return <p> "Error..."</p>;
  const user = data?.user;
  return (
    <div>
      <Center>
        <VStack>
          <Image
            objectFit="cover"
            maxW="300px"
            rounded="sm"
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack gap="0">
            <Text
              textStyle="3xl"
              color="gray.400"
              fontSize="3xl"
              fontWeight="bold"
            >
              {"@"}
              {user?.username}
            </Text>
            <HStack>
              <Text
                color="fg.muted"
                textStyle="sm"
                fontSize="xl"
                fontWeight="bold"
              >
                Full Name :
              </Text>
              <Group>
                <Text textStyle="xl" fontSize="xl" fontWeight="bold">
                  {user?.firstname}{" "}
                </Text>
                <Text textStyle="xl" fontSize="xl" fontWeight="bold">
                  {user?.lastname}
                </Text>
              </Group>
            </HStack>
            <HStack>
              <Text
                color="fg.muted"
                textStyle="xl"
                fontSize="xl"
                fontWeight="bold"
              >
                Email :
              </Text>
              <Text textStyle="xl" fontSize="xl" fontWeight="bold">
                {user?.email}
              </Text>
            </HStack>
          </Stack>
        </VStack>
      </Center>
    </div>
  );
};

export default PostAuthorProfile;
