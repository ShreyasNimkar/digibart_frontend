import React from "react";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { getTradeItems } from "../controllers/shopController";
import Cookies from "js-cookie";
import { DragDropContext } from "react-beautiful-dnd";

const Trade = ({ id }) => {
  // const { data } = useQuery(["userTradeProducts"], getTradeItems(id), {
  //   staleTime: 60000,
  // });
  // let myProducts;
  // let otherUserProducts;
  // if (data) {
  //   myProducts = data.myProducts;
  //   otherUserProducts = data.otherUserProducts;
  // }
  // console.log(myProducts);
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="sm:hidden md:hidden lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="w-10/12 h-95/100 bg-black border-1 border-white flex justify-around items-center">
          <div className="w-1/3 h-full flex flex-col gap-1 justify-center items-center">
            <div className="h-1/5 w-full">You</div>
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
          <div className="w-1/3 h-full"></div>
          <div className="w-1/3 h-full flex flex-col gap-1 justify-center items-center">
            <div className="h-1/5 w-full">You</div>
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
