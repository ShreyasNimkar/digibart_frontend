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
    console.log(res.data.data);
    return res.data.data.products;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};

export const getUserItems = (id) => async () => {
  const loader = Toaster.startLoad("Loading your Products..");
  const res = await postHandler(`${URL}/listed/${id}`, {}, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Products Loaded", 1);
    return res.data.data.products;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};

export const getTradeItems = (id) => async () => {
  const loader = Toaster.startLoad("Loading your Products..");
  const res = await postHandler(`${URL}/trade/${id}`, {}, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Products Loaded", 1);
    const obj = {
      myProducts: res.data.data.userProducts,
      otherUserProducts: res.data.data.otherUserProducts,
    };
    return obj;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};
