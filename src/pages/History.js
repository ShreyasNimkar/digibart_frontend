import React from "react";
import HistoricalTrade from "../components/HistoricalTrade";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
const History = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <img
        className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
        src="./assets/blob3.svg"
        alt="blob"
      />
      <div className="h-full flex items-center justify-around">
        <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="relative w-10/12 h-95/100 rounded-tr-3xl bg-[rgba(0,0,0,0.75)] border-1 border-white">
          <div className="rounded-tr-3xl h-1/6 border-2 border-white">
            <p className="text-whtie text-5xl ml-3 mt-2">Trade History</p>
          </div>
          <div className="h-full overflow-y-scroll">
            <HistoricalTrade />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
