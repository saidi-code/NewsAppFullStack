import { Post } from "../shared";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt, TfiTime } from "react-icons/tfi";
import {
  Flex,
  HStack,
  Text,
  Group,
  Box,
  Em,
  IconButton,
  Link,
  Separator,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/tag";
import { Alert } from "./ui/alert";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import CommentCount from "./CommentCount";
import PostAuthor from "./PostAuthor";
import { LuExternalLink } from "react-icons/lu";
import moment from "moment";
import { IoSend } from "react-icons/io5";
import { FormEvent, MouseEvent, useState } from "react";
import { creatComment } from "../ApiCall/comment";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
interface PostProps {
  post: Post;
}
interface createComment {
  postId: string;
  comment: string;
}

const PostCompo = ({ post }: PostProps) => {
  const [commentText, setCommentText] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation((newComment: createComment) => {
    return creatComment(newComment.postId, newComment.comment);
  });
  const handleAddComment = async (e: FormEvent | MouseEvent) => {
    e.preventDefault();
    try {
      await mutation.mutate({
        postId: post.id,
        comment: commentText,
      });
      console.log(res);
      setCommentText("");
      setError("");
    } catch {
      console.log(mutation.error.status);
      setError(mutation.error.message);
    }
  };
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
          <Link href="#" as="span">
            <a href={`${post.url}`} target="_blank">
              <Em truncate lineClamp="1" size="lg">
                {post.url}
              </Em>
            </a>
          </Link>

          <LuExternalLink />
        </Flex>

        <Flex w="100%" justifyContent={"space-between"} mt="2">
          <HStack gap="4">
            <Tag borderRadius="lg">
              <Group gap={"2"}>
                <IconButton variant="gohst" size="sm">
                  <AiOutlineLike size={16} />
                </IconButton>
                <Separator size="md" orientation="vertical" height="4" />

                <DialogRoot size="lg" placement="center">
                  <DialogTrigger asChild>
                    <IconButton variant="gohst" size="sm">
                      <TfiCommentAlt size={16} />
                    </IconButton>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogCloseTrigger />
                    <DialogHeader>
                      <DialogTitle>New comment | {post.title} </DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <Box mb="2">
                        {mutation.isError && (
                          <Alert
                            status="error"
                            mb="8"
                            title={mutation.error.message}
                          />
                        )}
                        {mutation.isSuccess && (
                          <Alert
                            status="success"
                            mb="8"
                            title="Successfully added!"
                          />
                        )}
                      </Box>
                      <form onSubmit={handleAddComment}>
                        <Textarea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Add a comment..."
                        />
                        <Button
                          type="submit"
                          colorPalette="teal"
                          p="2"
                          variant="outline"
                        >
                          Send <IoSend size="8px" />
                        </Button>
                      </form>
                    </DialogBody>
                  </DialogContent>
                </DialogRoot>
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
