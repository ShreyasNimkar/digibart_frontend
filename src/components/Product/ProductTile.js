import React from "react";
import envHandler from "../../managers/envHandler";

const ProductTile = ({ name, src }) => {
  return (
    <div className="w-1/4 h-full bg-red-700">
      {name}
      <img src={`${envHandler("BACKEND_URL")}/${src}`} alt="" />
    </div>
  );
};

export default ProductTile;
