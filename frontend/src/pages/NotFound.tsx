import { Box, Heading, Text, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="6xl"
        bgGradient="to-r"
        gradientFrom="teal.400"
        gradientTo="teal.600"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <Link to="/">
        <Button
          colorPalette="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
