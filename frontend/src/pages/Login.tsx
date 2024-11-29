import { Button, Center, Input, Stack, Box, Text } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { isLoggedIn, signIn } from "../ApiCall/auth";
import { useCurrentUser } from "../contexts/userContext";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// interface FormValues {
//   username: string;
//   password: string;
// }

const Login = () => {
  const navigate = useNavigate();
  const { refreshCurrentUser } = useCurrentUser();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  // const { isLoading, mutate } = useMutation(signIn(login, password), {
  //   onSuccess: (data) => console.log(data),
  //   onError: () => {
  //     alert("there was an error");
  //   },
  // });
  const handleLogin = useCallback(
    async (e: FormEvent | MouseEvent) => {
      e.preventDefault();

      try {
        await signIn(login, password);
        refreshCurrentUser();
        navigate(ROUTES.HOME);
      } catch {
        setError("Bad credentials");
      }
    },
    [navigate, password, refreshCurrentUser, login]
  );
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.HOME);
    }
  }, [navigate]);
  return (
    <Center height="70vh">
      <Box p="3" width="lg" bg="gray.100" rounded="md">
        <Text fontWeight={"bold"} textStyle="3xl" mb="4">
          Login
        </Text>
        {/* ToDo : Checkin the user inputs values sql injection */}
        {!!error && (
          <Text color="red.700" mb="8">
            {error}
          </Text>
        )}
        <form onSubmit={handleLogin}>
          <Stack gap="4" align="flex-start">
            <Field
              onChange={(e: FormEvent | MouseEvent) => setLogin(e.target.value)}
              label="Email or Username"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={login}
            >
              <Input />
            </Field>

            <Field
              onChange={(e: FormEvent | MouseEvent) =>
                setPassword(e.target.value)
              }
              label="Password"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={password}
            >
              <PasswordInput />
            </Field>

            <Button
              display="block"
              width="full"
              size="lg"
              bg="teal"
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
