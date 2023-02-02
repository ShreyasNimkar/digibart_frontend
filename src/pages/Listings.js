import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product/Product";
import AddProduct from "../components/AddProduct";
const Listings = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="sm:hidden md:hidden lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="relative w-10/12 h-95/100 bg-black border-1 border-white">
          <div className=" h-full flex items-start flex-wrap justify-around gap-x-2 gap-y-2 overflow-y-scroll">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="absolute p-5 bottom-0 right-0">
            <button
              type="button"
              data-dial-toggle="speed-dial-menu-default"
              aria-controls="speed-dial-menu-default"
              aria-expanded="false"
              class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-8 h-8 transition-transform group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span class="sr-only">Open actions menu</span>
            </button>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
