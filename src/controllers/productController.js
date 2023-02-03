import getHandler from "../handlers/getHandler.js";
import postHandler from "../handlers/postHandler.js";
import Toaster from "../utils/toaster.js";
import envHandler from "../managers/envHandler.js";
import Cookies from "js-cookie";

const URL = `${envHandler("BACKEND_URL")}/products`;

export const getAllItems = async () => {
  const loader = Toaster.startLoad("Adding your Product..");
  const res = await postHandler(`${URL}/`, {}, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Product added", 1);
    return res.data.data.products;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};

export const getItem = (id) => async () => {
  const loader = Toaster.startLoad("Loading your Product..");
  const res = await getHandler(`${URL}/${id}`, true);

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Loaded", 1);
    return res.data.data;
  } else Toaster.stopLoad(loader, res.data.message, 0);
};

export const addItem = async (formData) => {
  const loader = Toaster.startLoad("Adding your Product..");
  const res = await postHandler(`${URL}/`, formData, true);
  console.log()

  if (res.status === 1) {
    Toaster.stopLoad(loader, "Product added", 1);
    return res.data.data.products;
  } else{
    Toaster.stopLoad(loader, res.data.message, 0);
    console.log(res.data)
  } 
};

