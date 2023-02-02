import React from "react";
import envHandler from "../../managers/envHandler";

const ProductTile = ({ name, src }) => {
  return (
    <div className="xs:w-3/4 xs:gap-1 sm:w-1/2 md:w-1/4  h-full bg-red-700">
      {name}
      <img src={`${envHandler("BACKEND_URL")}/${src}`} alt="" />
    </div>
  );
};

export default ProductTile;
