import React from "react";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { getTradeItems } from "../controllers/shopController";
import Cookies from "js-cookie";

const Trade = ({ id }) => {
  const { data } = useQuery(["userTradeProducts"], getTradeItems(id), {
    staleTime: 60000,
  });
  let myProducts;
  let otherUserProducts;
  if (data) {
    myProducts = data.myProducts;
    otherUserProducts = data.otherUserProducts;
  }
  console.log(myProducts);
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex items-center justify-around">
        <div className="sm:hidden md:hidden lg:block w-1/12 flex-col h-95/100  ">
          <Navbar />
        </div>
        <div className="w-10/12 h-95/100 bg-black border-1 border-white flex justify-around items-center">
          <div className="w-1/3 h-full">
            <div className="h-1/2 w-full"></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="w-1/3 h-full">
            <div></div>
          </div>
          <div className="w-1/3 h-full">
            <div className="h-1/2 w-full">
              {/* <Bar
                className="bg-HTpurple-900"
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                      min: 0,

                      max: 10,
                      ticks: { padding: 10, color: "#D9D9d9", stepSize: 2 },
                      grid: {
                        color: "#271933",
                      },
                    },
                    x: {
                      ticks: {
                        color: "#D9D9d9",
                      },
                      grid: {
                        color: "#271933",
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                      labels: {
                        color: "white",
                      },
                    },
                  },
                }}
                data={[]}
              /> */}
            </div>
            <div className="w-full h-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
