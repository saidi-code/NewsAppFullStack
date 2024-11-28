import {
  Stack,
  Float,
  IconButton,
  Box,
  Button,
  Center,
  useHighlight,
  Heading,
  Mark,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { getPosts } from "../ApiCall/posts";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../shared";
import PostCompo from "../components/Post";
import { Link } from "react-router-dom";
const Home = () => {
  const chunks = useHighlight({
    text: "Endless scale, powered by real humans.",
    query: ["endless", "real humans."],
  });
  const { data, error, isLoading } = useQuery(["listposts"], getPosts);
  if (!data?.posts) {
    return <p>is Empty</p>;
  }
  const posts: Post[] = data?.posts;
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error loading posts</div>;
  }
  return (
    <>
      <Heading size="5xl" height="20vh">
        {chunks.map((chunk, index) => {
          return chunk.match ? (
            <Mark
              key={index}
              css={{
                fontStyle: "italic",
                color: "red.500",
                position: "relative",
              }}
            >
              {chunk.text}
              <img
                style={{ position: "absolute", left: 0 }}
                src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
                loading="lazy"
                alt=""
              />
            </Mark>
          ) : (
            <Fragment key={index}>{chunk.text}</Fragment>
          );
        })}
      </Heading>

      <Stack centerContent="true">
        {posts?.map((p: Post) => {
          return <PostCompo key={p.id} post={p} />;
        })}
        <Center mt="16px" p="8px">
          <Button colorPalette="teal" variant="outline">
            Read More
            <MdKeyboardDoubleArrowDown />
          </Button>
        </Center>
      </Stack>
      <Float placement="bottom-end">
        <Link to={"/post/new"}>
          <IconButton bg="teal" size="xl" aria-label="Add Post" rounded="full">
            <FaPlus />
          </IconButton>
        </Link>
      </Float>
    </>
  );
};

export default Home;
