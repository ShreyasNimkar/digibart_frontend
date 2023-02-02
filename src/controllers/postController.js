import postHandler from "../handlers/postHandler";
import Toaster from "../utils/toaster.js";

const postController = async (formData, reloader, URL_INJECTION) => {
  const URL = `${process.env.REACT_APP_DATABASE}/${URL_INJECTION}`;
  const res = await postHandler(URL, formData);
  if (res.status === 1) {
    Toaster.success("Registered!");
    reloader(Math.random());
  } else Toaster.error(res.data.message);
};

export default postController;
