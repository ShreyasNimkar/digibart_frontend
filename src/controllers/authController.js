import postHandler from "../handlers/postHandler.js";
import Toaster from "../utils/toaster.js";
import envHandler from "../managers/envHandler.js";
import Cookies from "js-cookie";

const URL = `${envHandler("BACKEND_URL")}/users`;

export const signup = async (formData) => {
  const loader = Toaster.startLoad("Creating your Account..");
  const res = await postHandler(`${URL}/signup`, formData, false);
  console.log(res);
  if (res.status === 1) {
    Toaster.stopLoad(loader, "Account Created", 1);
    Cookies.set("token", res.data.token, {
      expires: Number(envHandler("TOKEN_TIME")),
    });
    return 1;
  } else Toaster.stopLoad(loader, res.data.message, 0);
  return 0;
};

export const login = async (formData) => {
  const res = await postHandler(`${URL}/login`, formData, false);
  if (res.status === 1) {
    Toaster.success("Logged In!");
    Cookies.set("token", res.data.token, {
      expires: Number(envHandler("TOKEN_TIME")),
    });
    return 1;
  } else Toaster.error(res.data.message);
  return 0;
};
