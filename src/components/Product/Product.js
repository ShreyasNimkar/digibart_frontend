import React from "react";
import Navbar from "../Navbar";

const Product = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className=" w-10/12 h-95/100 bg-black border-1 border-white">
          <div className="flex w-full h-full justify-around items-center">
            <div className="w-1/3 p-2 h-full flex flex-col items-center justify-around">
              <img className="p-2" src="/assets/blob3.svg" alt="" />
            </div>
            <div className="w-2/3 flex flex-col justify-center h-full">
              <div className="flex flex-col  pl-3 h-4/5 justify-center">
                <div className="text-6xl">Product Name</div>
                <div className=" mt-4">Product Category</div>
                <div className=" mt-2">Product Description</div>
                <div className=" mt-2">Product Life</div>
                <div className=" mt-2">Estimated Value</div>
                <div className=" mt-2">Product Owner</div>
              </div>
              <div className="h-1/5 w-full flex justify-around items-center">
                <a
                  href="#_"
                  class="relative text-center w-1/3 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
                >
                  <span class="w-full  h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
                  <span class="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span class="relative text-white">Login</span>
                  </span>
                </a>{" "}
                <a
                  href="#_"
                  class="relative text-center p-0.5 w-1/3 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
                >
                  <span class="w-full  h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
                  <span class="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span class="relative text-white">Login</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
