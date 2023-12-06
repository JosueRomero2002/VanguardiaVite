import axios from "axios";

//TODO: Finish the class work

export async function imageUploader(
  userdata,
  imagepath,
  titleparam,
  descriptionparam
) {
  try {
    const options = {
      method: "POST",
      url: `${import.meta.env.VITE_SOME_KEY}/posts/createPost`,
      data: {
        userdata,
        imagepath,
        titleparam,
        descriptionparam,
      },
      withCredentials: true,
    };
    const response = await axios.request(options);

    return response.data;
  } catch (err) {
    return response.status(500).json({ status: 500, message: err.message });
  }
}
