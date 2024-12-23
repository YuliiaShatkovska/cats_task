import { client } from "../helpers/http";

export const getFacts = async () => {
  const response = await client.get("/facts?limit=332");

  return response.data;
};
