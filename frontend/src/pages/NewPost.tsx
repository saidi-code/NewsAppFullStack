import {
  Center,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { Alert } from "../components/ui/alert";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../ApiCall/posts";
interface newPost {
  title: string;
  url: string;
}
const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [PostUrl, setPostUrl] = useState("");
  const [Error, setError] = useState("");

  const mutation = useMutation((newPost: newPost) => {
    return createPost(newPost.title, newPost.url);
  });
  const handleSubmit = async (e: FormEvent | MouseEvent) => {
    e.preventDefault();
    try {
      await mutation.mutate({ title: postTitle, url: PostUrl });
    } catch {
      setError(mutation.error.message);
    }
  };
  return (
    <Center height="70vh">
      <Box p="3" width="lg" bg="gray.100" rounded="md">
        <Text fontWeight={"bold"} textStyle="3xl" mb="4">
          Add New Post
        </Text>
        {/* ToDo : Checkin the user inputs values sql injection */}
        {mutation.isError && (
          <Alert status="error" mb="8" title={mutation.error.message} />
        )}
        {mutation.isSuccess && (
          <Alert status="success" mb="8" title="Successfully added!" />
        )}
        {/* {!!error && (
          <Text color="red.700" mb="8">
            {error}
          </Text>
        )} */}
        <form onSubmit={handleSubmit}>
          <Stack gap="4" align="flex-start">
            <Field
              onChange={(e: FormEvent | MouseEvent) =>
                setPostTitle(e.target.value)
              }
              label="New post title"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={postTitle}
            >
              <Input />
            </Field>

            <Field
              onChange={(e: FormEvent | MouseEvent) =>
                setPostUrl(e.target.value)
              }
              label="New post url"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={PostUrl}
            >
              <Input />
            </Field>

            <Button
              display="block"
              width="full"
              size="lg"
              bg="teal"
              type="submit"
            >
              Add
              {mutation.isLoading && (
                <Spinner mx="3" size="sm" color="colors.white" />
              )}
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default NewPost;
