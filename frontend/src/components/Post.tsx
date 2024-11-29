import { Post } from "../shared";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt, TfiTime } from "react-icons/tfi";
import {
  Flex,
  HStack,
  Text,
  Group,
  Box,
  Code,
  Em,
  IconButton,
  Stack,
  Link,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/tag";

import CommentCount from "./CommentCount";
import PostAuthor from "./PostAuthor";
import { LuExternalLink } from "react-icons/lu";
import moment from "moment";
interface PostProps {
  post: Post;
}
const PostCompo = ({ post }: PostProps) => {
  return (
    <Box
      width="full"
      p="2"
      // _hover={{ bg: "gray.20" }}
      // borderWidth="1px"
      // borderColor="border.disabled"
      // color="fg.disabled"
      // bg="bg"
      shadow="sm"
      borderRadius="sm"
      mb="3"
    >
      <Box color="fg.muted">
        <Flex mb="2" justifyContent="space-between">
          <PostAuthor userId={post.userId} />
          {/* //Tod Add point function  */}

          {/* <Group attached>
                <Badge variant="solid" colorPalette="light-gray">
                  points
                </Badge>
                <Badge variant="solid" colorPalette="orange">
                  350
                </Badge>
              </Group> */}
          <Box>
            <Tag
              color="orange"
              px="2"
              py="1"
              rounded={"full"}
              colorPalette="fg.muted"
            >
              Sports
            </Tag>
          </Box>
        </Flex>

        <Box mb="2">
          <Text
            fontWeight="bold"
            textStyle="lg"
            color="fg"
            truncate
            lineClamp="1"
          >
            {post.title}
          </Text>
        </Box>

        <Link href="#" display="block">
          <Flex
            alignItems="center"
            gap="2"
            width="fit"
            py="1"
            px="2"
            direction="row"
            bg="bg.muted"
            borderRadius="md"
          >
            <a href={`${post.url}`} target="_blank">
              <Em truncate lineClamp="1" size="lg">
                {post.url}
              </Em>
            </a>

            <LuExternalLink />
          </Flex>
        </Link>

        <Flex w="100%" justifyContent={"space-between"} mt="2">
          <HStack gap="4">
            <Tag borderRadius="lg">
              <Group gap={"4"}>
                <IconButton variant="gohst" size="sm">
                  <AiOutlineLike size={16} />
                </IconButton>
                <IconButton variant="gohst" size="sm">
                  <TfiCommentAlt size={16} />
                </IconButton>
              </Group>
            </Tag>
            <Tag p="2" borderRadius="lg" startElement={<TfiTime size={16} />}>
              {moment(post.postedAt).format("llll")}
            </Tag>
          </HStack>

          <CommentCount postId={post.id} />
        </Flex>
      </Box>
    </Box>
  );
};

export default PostCompo;
