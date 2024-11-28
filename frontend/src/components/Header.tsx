import { useCurrentUser } from "../contexts/userContext";
import {
  Box,
  Flex,
  Button,
  Text,
  HStack,
  Stack,
  defineStyle,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuItemGroup,
  MenuSeparator,
} from "./ui/menu";
import { signOut, isLoggedIn } from "../ApiCall/auth";
import { ROUTES } from "../routes";
import { useCallback } from "react";
const ringCss = defineStyle({
  outlineWidth: "3px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});
const Header = () => {
  const navigate = useNavigate();
  const { currentUser, refreshCurrentUser } = useCurrentUser();

  const onSignout = useCallback(() => {
    signOut();
    refreshCurrentUser();
    navigate(ROUTES.HOME);
  }, [navigate, refreshCurrentUser]);
  const user = currentUser?.user;
  return (
    <Box mb="30px" py="4">
      <Flex justifyContent={"space-between"}>
        <Text fontSize="2xl" fontWeight="bold">
          <Link to="/">LOGO</Link>
        </Text>

        {isLoggedIn() ? (
          <MenuRoot width="100%">
            <MenuTrigger asChild>
              <HStack key={user?.email} gap="3">
                <Avatar
                  css={ringCss}
                  colorPalette="green"
                  name={user?.firstname}
                  size="md"
                  src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                />
                <Stack gap="0">
                  <Text textStyle="sm" fontWeight="medium">
                    {user?.firstname}
                  </Text>
                  <Text color="fg.muted" textStyle="sm">
                    {user?.email}
                  </Text>
                </Stack>
              </HStack>
            </MenuTrigger>
            <MenuContent width="100%">
              <MenuItemGroup title="Compte">
                <MenuItem value="bold">Profile</MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <Button
                    width="full"
                    bg="red.500"
                    color="white"
                    _hover={{ bg: "red.300" }}
                    onClick={() => onSignout()}
                    variant={"outline"}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </MenuItemGroup>
            </MenuContent>
          </MenuRoot>
        ) : (
          <Flex gap={2}>
            <Button
              onClick={() => navigate("/login")}
              colorPalette="teal"
              variant={"outline"}
            >
              Login
            </Button>
            <Button onClick={() => navigate("/register")} colorPalette={"teal"}>
              Register
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
