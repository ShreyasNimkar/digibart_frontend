import React from "react";
import Navbar from "../components/Navbar";
import ProductTile from "../components/Product/ProductTile";
import AddProduct from "../AddProduct/AddProduct";
const Listings = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="sm:hidden md:hidden lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="relative w-10/12 h-95/100 bg-black border-1 border-white">
          <div className=" h-full flex items-start flex-wrap justify-around gap-x-2 gap-y-2 overflow-y-scroll">
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
          </div>
          <div className="absolute p-5 bottom-0 right-0">
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
