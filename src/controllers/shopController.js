import getHandler from "../handlers/getHandler.js";
import postHandler from "../handlers/postHandler.js";
import Toaster from "../utils/toaster.js";
import envHandler from "../managers/envHandler.js";
import Cookies from "js-cookie";

const URL = `${envHandler("BACKEND_URL")}/shop`;

export const getAllItems = async () => {
  const loader = Toaster.startLoad("Loading your Products..");
  const res = await postHandler(`${URL}/`, {}, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Products Loaded", 1);
    return res.data.data;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};

export const getUserItems = async () => {
  const loader = Toaster.startLoad("Loading your Products..");
  const res = await postHandler(`${URL}/listed/`, {}, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Products Loaded", 1);
    return res.data.data;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};
