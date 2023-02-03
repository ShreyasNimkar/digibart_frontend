import React from "react";
import Navbar from "../components/Navbar";
import ProductTile from "../components/Product/ProductTile";
import AddProduct from "../AddProduct/AddProduct";
import { useQuery } from "@tanstack/react-query";
import { getUserItems } from "../controllers/shopController";
import Cookies from "js-cookie";
import AddStack from "../AddStack/AddStack";
import { useState, useEffect } from "react";
import getHandler from "../handlers/getHandler";
import envHandler from "../managers/envHandler";

const Listings = () => {
  const [products, setProducts] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [user, setUser] = useState();
  const [reload, setReload] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await getUserItems(Cookies.get("id"));
      setProducts(data.products);
      setStacks(data.stacks);
    };
    const getUser = async () => {
      const data = await getHandler(
        `${envHandler("BACKEND_URL")}/users/${Cookies.get("id")}`,
        true
      );
      setUser(data.data.data);
    };
    getData();
    getUser();
  }, [reload]);

  console.log(user);
  if (user)
    return (
      <div className="h-screen overflow-hidden">
        <img
          className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
          src="./assets/blob"
          alt="blob"
        />
        <img
          className="absolute h-full opacity-90 -z-30 bottom-0 right-0"
          src="./assets/blob1.png"
          alt="blob"
        />
        <div className="h-full flex items-center justify-around">
          <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
            <Navbar />
          </div>
          <div className="relative w-10/12 h-95/100 rounded-tr-3xl bg-[rgba(0,0,0,0.75)] border-1 border-white">
            <div className="border-b-1 border-white h-1/4 w-full flex justify-between items-center">
              <div className=" xs:w-3/4 xs:h-3/4 sm:w-1/2 sm:h-full md:h-full md:w-full h-full flex justify-around items-center">
                <div className="flex justify-start items-center">
                  <img
                    className=" w-full h-full rounded-full border-1 border-white"
                    src={`${envHandler("BACKEND_URL")}/users/profilePics/${
                      user.profilePic
                    }`}
                    alt="A"
                  />
                </div>
                <div className="w-1/5">
                  Name : <br />
                  {user.name}
                </div>
                <div className="w-1/5">
                  Username : <br />@{user.username}
                </div>
              </div>
            </div>
            <div className=" h-3/4 full flex gap-3 flex-col overflow-y-hidden">
              <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
                {products
                  ? products.map((el, index) => {
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
                <AddProduct reload={setReload} />
              </div>
              <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
                {stacks
                  ? stacks.map((el, index) => {
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
              <AddStack reload={setReload} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Listings;
