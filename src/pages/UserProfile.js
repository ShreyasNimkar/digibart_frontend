import React from "react";
import Navbar from "../components/Navbar";
import ProductTile from "../components/Product/ProductTile";
import ProductTileShallow from "../components/Product/ProductTileShallow";
import AddProduct from "../AddProduct/AddProduct";
import { useQuery } from "@tanstack/react-query";
import { getUserItems } from "../controllers/shopController";
import Cookies from "js-cookie";
import AddStack from "../AddStack/AddStack";
const UserProfile = () => {
  console.log(Cookies.get("id"));
  const { data } = useQuery(["userProducts"], getUserItems(Cookies.get("id")), {
    staleTime: 60000,
  });
  return (
    <div className="h-screen overflow-hidden">
      <img
        className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
        src="./assets/blob2.png"
        alt="blob"
      />
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

            <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll overflow-y-hidden justify-around">
              <ProductTileShallow />
              <ProductTileShallow />
              <ProductTileShallow />
              <ProductTileShallow />
              <ProductTileShallow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
