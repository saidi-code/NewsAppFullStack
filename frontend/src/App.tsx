import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";
import ProfilePostAuthor from "./pages/PostAuthorProfile";
import { Box, Center, Container, Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <>
      <Container fluid>
        <CurrentUserContextProvider>
          <BrowserRouter>
            <Header />

            <Center>
              <Box position="relative" mt="30" maxW="3xl">
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.POST(":postId")} element={<ViewPost />} />
                  <Route path={ROUTES.POSTNEW} element={<NewPost />} />
                  <Route path={ROUTES.LOGIN} element={<Login />} />
                  <Route path={ROUTES.REGISTER} element={<Register />} />
                  <Route
                    path={ROUTES.POSTAUTHORPROFILE(":userId")}
                    element={<ProfilePostAuthor />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Box>
            </Center>
          </BrowserRouter>
        </CurrentUserContextProvider>
      </Container>
    </>
  );
}

export default App;
