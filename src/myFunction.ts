import { fetchData } from "./utils";

export const myFunction = async (url: string): Promise<number> => {
  const data = await fetchData(url);
  return data.length;
};
