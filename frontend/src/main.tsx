import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
