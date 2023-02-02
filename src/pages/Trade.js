import React from "react";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { getTradeItems } from "../controllers/shopController";
import Cookies from "js-cookie";

const Trade = ({ id }) => {

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="w-10/12 h-95/100 bg-[rgba(0,0,0,0.8)] rounded-tr-3xl border-1 border-white flex justify-around items-center">
          <div className="w-1/3 h-full flex flex-col gap-1 justify-center items-center">
            <div className="h-1/5 w-full ">
              <div className="w-1/3 h-full flex items-center justify-around">
                <img
                  className=" w-1/2 h-1/2 rounded-full border-1 border-white"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt="Rounded avatar"
                />
              </div>
            </div>

            <div className="h-3/4 w-full flex flex-col  gap-3">
              <div className="h-1/2  flex flex-wrap gap-1 overflow-y-scroll justify-around items-center">
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
              </div>
              <div className="h-1/2 flex flex-wrap gap-1 overflow-y-scroll justify-around items-center">
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full "></div>
          <div className="w-1/3 h-full flex flex-col gap-1 rounded-tr-3xl justify-center items-center">
            <div className="h-1/5 w-full ">
              <div className="w-1/3 h-full flex items-center justify-around">
                <img
                  className=" w-1/2 h-1/2 rounded-full border-1 border-white"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt="Rounded avatar"
                />
              </div>
            </div>
            <div className="h-3/4 w-full gap-3 flex flex-col ">
              <div className="h-1/2  flex flex-wrap gap-1 overflow-y-scroll justify-around items-center">
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
              </div>
              <div className="h-1/2 flex flex-wrap gap-1 overflow-y-scroll justify-around items-center">
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
                <div className="h-1/2 w-1/3 bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
