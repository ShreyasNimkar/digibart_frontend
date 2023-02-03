import React from "react";
import envHandler from "../../managers/envHandler";

const ProductTile = ({ name, src }) => {
  return (
    <div className="h-full w-1/3 bg-red-700">
      <div className="px-24 py-32">
        <div className="w-full flex items-center justify-start">{name}</div>
        <img src={`${envHandler("BACKEND_URL")}/${src}`} alt="" />
      </div>
    </div>
  );
};

export default ProductTile;
