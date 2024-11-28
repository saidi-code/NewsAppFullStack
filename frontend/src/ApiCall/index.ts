import { endpointConfig, ERRORS } from "../shared";
import { QueryClient } from "@tanstack/react-query";
import { API_CONFIG } from "../config/config";
import { getLocalStorageJWT, isLoggedIn, signOut } from "./auth";

const apiHost = API_CONFIG.baseUrl;
export class ApiError extends Error {
  public status: number;

  constructor(status: number, msg: string) {
    super(msg);
    this.status = status;
  }
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
      retry(failureCount, error) {
        const { status } = error as ApiError;
        if (typeof status !== "number") {
          console.error("got non-numeric error code:", error);
          return true;
        }
        return status >= 500 && failureCount < 2;
      },
    },
  },
});
export async function CallEndpoint<Request, Response>(
  endpoint: endpointConfig,
  request: Request
): Promise<Response> {
  const { url, method, auth } = endpoint;
  const requestBody = request ? request : null;

  const response = await fetch(`${apiHost}${url}`, {
    method: method.toLocaleUpperCase(),
    headers: {
      "Content-Type": "application/json",
      ...((auth || isLoggedIn()) && {
        Authorization: `Bearer ${getLocalStorageJWT()}`,
      }),
    },
    ...(requestBody && {
      body: JSON.stringify(requestBody),
    }),
  });
  if (!response.ok) {
    let msg = "";
    try {
      msg = (await response.json()).error;
      // Sign user out and refresh if the token has expired
      if (msg === ERRORS.TOKEN_EXPIRED) {
        signOut();
        window.location.reload();
      }
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      throw new ApiError(response.status, msg);
    }
  }
  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  return isJson ? ((await response.json()) as Response) : ({} as Response);
}
