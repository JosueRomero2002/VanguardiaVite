import axios from "axios";

//TODO: Finish the class work

export async function getAllPizzas() {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_SOME_KEY}/posts/createPost`,

    withCredentials: true,
  };
  const response = await axios.request(options);

  return response.data;
}
