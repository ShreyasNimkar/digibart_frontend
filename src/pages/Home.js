import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters/Filters";
import ProductTile from "../components/Product/ProductTile";
import { getAllItems } from "../controllers/shopController";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const { data } = useQuery(["products"], getAllItems, { staleTime: 1000 });
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="sm:hidden md:hidden lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="w-10/12 h-95/100 bg-[rgba(0,0,0,0.75)] border-1 border-white">
          <div className="h-10/100 flex justify-around items-center">
            <div className="w-1/6"></div>
            <div className="flex justify-center items-center w-full">
              <div className=" w-full flex justify-around items-center">
                <div className=" input-group relative flex items-stretch w-4/5 ">
                  <input
                    type="search"
                    className="form-control rounded-l-3xl relative flex-auto min-w-0 block w-full px-3 py-0 text-base font-normal  text-gray-700 bg-slate-600 bg-clip-padding    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn rounded-r-3xl inline-block px-6 py-2.5 bg-[#DC2ADE] text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/6 flex justify-start items-center">
              <Filters />
            </div>
          </div>
          <div className="h-90/100 overflow-y-scroll">
            <div className="h-1/2 flex items-start  pt-2 flex-wrap justify-around gap-x-2 gap-y-2 ">
              {data
                ? data.map((el, index) => {
                    return (
                      <ProductTile
                        name={el.title}
                        key={index}
                        src={el.images[0]}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
