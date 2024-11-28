import { BASE_URL } from "../shared";
export interface Config {
  baseUrl: string;
}

const DevConfig: Config = {
  baseUrl: "http://localhost:3000/api/v1",
};
const ProdConfig: Config = {
  baseUrl: BASE_URL,
};

export const API_CONFIG: Config =
  import.meta.env.VITE_REACT_APP_ENV === "dev" ? DevConfig : ProdConfig;
