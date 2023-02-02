import React from "react";

import getHandler from "../handlers/getHandler";
const getController = async (URL_INJECTION) => {
  const URL = `${process.env.REACT_APP_DATABASE}/${URL_INJECTION}}`;
  const res = await getHandler(URL);

  return res.data.data;
};

export default getController;
