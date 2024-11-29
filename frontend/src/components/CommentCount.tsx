import { Badge, Group, Spinner, Separator, Text } from "@chakra-ui/react";
import { getPostCommentCount } from "../ApiCall/comment";
import { useQuery } from "@tanstack/react-query";
import { FaExclamation } from "react-icons/fa";
import { Link } from "react-router-dom";
interface CommentCountProps {
  postId: string;
}
const CommentCount = ({ postId }: CommentCountProps) => {
  const { data, error, isLoading } = useQuery(
    [`postcommentcount${postId}`],
    async () => await getPostCommentCount(postId)
  );

  if (isLoading)
    return (
      <div>
        <Group attached>
          <Badge p="2" borderRadius="lg">
            Comments
          </Badge>
          {/* <Separator
            colorPalette="cyan"
            size="lg"
            orientation="vertical"
            height="4"
          /> */}
          <Badge p="2" borderRadius="lg">
            {isLoading && <Spinner size="sm" color="teal.500" />}
          </Badge>
        </Group>
      </div>
    );
  if (error)
    return (
      <div>
        <Group attached>
          <Badge p="2" borderRadius="lg">
            Comments
          </Badge>
          <Separator
            colorPalette="cyan"
            size="lg"
            orientation="vertical"
            height="4"
          />
          <Badge p="2" borderRadius="lg">
            {error && <FaExclamation color="teal.500" />}
          </Badge>
        </Group>
      </div>
    );
  const count = data?.count;
  return (
    <>
      {count! > 0 ? (
        <Link to={`/post/${postId}`}>
          <Badge p="2" borderRadius="lg" gap="2" _hover={{ bg: "gray.200" }}>
            <Text>Comments</Text>
            <Separator orientation="vertical" height="4" />
            <Text>{count}</Text>
          </Badge>
        </Link>
      ) : (
        <Badge p="2" borderRadius="lg" gap="2" _hover={{ bg: "gray.200" }}>
          <Text>Comments</Text>
          <Separator orientation="vertical" height="4" />
          <Text>{count}</Text>
        </Badge>
      )}
    </>
  );
};
export default CommentCount;
