import React from "react";
import Navbar from "../components/Navbar";
import ProductTile from "../components/Product/ProductTile";
import AddProduct from "../AddProduct/AddProduct";
import Offer from "../components/Offer";
const Offers = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="relative w-10/12 h-95/100 rounded-tr-3xl bg-[rgba(0,0,0,0.75)] border-1 border-white">
          <div className="rounded-tr-3xl h-1/6">
            <p className="text-whtie text-5xl ml-3 mt-2">Offers</p>
          </div>
          <Offer />
        </div>
      </div>
    </div>
  );
};

export default Offers;
