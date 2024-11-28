import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { isLoggedIn, signUp } from "../ApiCall/auth";
import { useEffect, useState } from "react";
import { PasswordInput } from "../components/ui/password-input";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { ROUTES } from "../routes";
import { useCurrentUser } from "../contexts/userContext";

const Register = () => {
  const { refreshCurrentUser } = useCurrentUser();
  const navigate = useNavigate();
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [un, setUn] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");

  const [error, setError] = useState("");
  const handleRegister = useCallback(
    async (e: FormEvent | MouseEvent) => {
      e.preventDefault();

      try {
        if (pass !== repass) {
          setError("password not match");
        }
        if (!fn || !un || !email || !un || !pass) {
          setError("Please fill all fields");
        }
        await signUp(fn, ln, email, pass, un);
        refreshCurrentUser();
        window.location.assign("/");
        // navigate(ROUTES.HOME);
      } catch {
        setError("Bad credentials");
      }
    },
    [refreshCurrentUser, pass, fn, ln, email, un, repass]
  );
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.HOME);
    }
  }, [navigate]);
  return (
    <Center height="90vh">
      <Box p="3" width="lg" bg="bg.muted" rounded="md">
        <Text fontWeight={"bold"} textStyle="3xl" mb="4">
          Register
        </Text>
        {/* ToDo : Checkin the user inputs values sql injection */}
        {!!error && (
          <Text color="red.700" mb="8">
            {error}
          </Text>
        )}
        <form onSubmit={handleRegister}>
          <Stack gap="4" align="flex-start">
            <HStack width="full" spacing="0">
              <Field
                onChange={(e) => setFn(e.target.value)}
                label="First name"
                invalid={"that's error"}
                errorText={"That's error text"}
                value={fn}
              >
                <Input />
              </Field>
              <Field
                onChange={(e) => setLn(e.target.value)}
                label="Last name"
                invalid={"that's error"}
                errorText={"That's error text"}
                value={ln}
              >
                <Input />
              </Field>
            </HStack>
            <Field
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={email}
            >
              <Input />
            </Field>
            <Field
              onChange={(e) => setUn(e.target.value)}
              label="User name"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={un}
            >
              <Input />
            </Field>
            <Field
              onChange={(e) => setPass(e.target.value)}
              label="Password"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={pass}
            >
              <PasswordInput />
            </Field>
            <Field
              onChange={(e) => setRePass(e.target.value)}
              label="Retape password"
              invalid={"that's error"}
              errorText={"That's error text"}
              value={repass}
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

export default Register;
