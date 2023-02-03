import React from "react";
import Navbar from "../components/Navbar";
import ProductTile from "../components/Product/ProductTile";
import AddProduct from "../AddProduct/AddProduct";
import { useQuery } from "@tanstack/react-query";
import { getUserItems } from "../controllers/shopController";
import Cookies from "js-cookie";
import AddStack from "../AddStack/AddStack";
import { useState, useEffect } from "react";

const Listings = () => {
  const [products, setProducts] = useState([])
  const [stacks, setStacks] = useState([])
  console.log(Cookies.get("id"));
  const { data } = useQuery(["userProductsAndStack"], getUserItems(Cookies.get("id")), {
    staleTime: 60000,
  });
  console.log(data)
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="relative w-10/12 h-95/100 rounded-tr-3xl bg-[rgba(0,0,0,0.75)] border-1 border-white">
          <div className="border-b-1 border-white h-1/4 w-full flex justify-between items-center">
            <div className=" xs:w-3/4 xs:h-3/4 sm:w-1/2 sm:h-full md:h-full md:w-1/6 h-full flex justify-around items-center">
              <img
                className=" w-4/5 h-4/5 rounded-full border-1 border-white"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Rounded avatar"
              />
            </div>
          </div>
          <div className=" h-3/4 full flex gap-3 flex-col overflow-y-hidden">
            <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
              {data
                ? data.products.map((el, index) => {
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
            <div className="absolute p-5 bottom-70 right-0">
              <AddProduct />
            </div>
            <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
            {data
                ? data.stacks.map((el, index) => {
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
          <div className="absolute p-5 bottom-0 right-0">
            <AddStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
