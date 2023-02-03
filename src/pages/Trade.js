import React from "react";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { getTradeItems } from "../controllers/shopController";
import Cookies from "js-cookie";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
Chart.register(...registerables);
const Trade = ({ id }) => {
  const [chartData, setChartData] = useState([]);

  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 82322,
    },
    {
      id: 2,
      year: 2017,
      userGain: 12330,
      userLost: 663,
    },
    {
      id: 3,
      year: 2018,
      userGain: 80220,
      userLost: 823,
    },
    {
      // id: 4,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
  ];
  if (chartData) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const userData = {
      labels: chartData.map((el) => capitalizeFirstLetter(el.tag)),
      datasets: [
        {
          data: chartData.map((el) => el.noOfPRs),
          backgroundColor: [
            "rgb(253,226,126,0.8)",
            "rgb(157,227,207,0.8)",
            "rgb(114,196,255,0.8)",
            "rgb(142,148,254,0.8)",
          ],
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    };
    return (
      <div className="h-screen overflow-hidden">
        <img
          className="absolute h-full opacity-90 -z-30  -mr-96"
          src="./assets/blob2.png"
          alt="blob"
        />
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
                    // src={`${envHandler("BACKEND_URL")}/users/profilePics/${
                    //   user.profilePic
                    // }`}
                    src={
                      "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                    }
                    alt="A"
                  />
                </div>
              </div>

              <div className="h-3/4 w-full flex flex-col  gap-3">
                <div className="h-full  flex flex-wrap gap-1 overflow-y-scroll justify-around items-center">
                  <div class="flex items-center mb-4"></div>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full flex item-center justify-around">
              <Bar
                className="bg-HTpurple-900 w-full h-full"
                options={{
                  indexAxis: "X",
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                      min: 0,

                      max: 20,
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
                data={userData}
              />
            </div>
            <div className="w-1/3 h-full flex flex-col gap-1 rounded-tr-3xl justify-center items-center">
              <div className="h-1/5 w-full ">
                <div className="w-1/3 h-full flex items-center justify-around">
                  <img
                    className=" w-1/2 h-1/2 rounded-full border-1 border-white"
                    src={
                      "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                    }
                    alt="A"
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
  }
  return <></>;
};

export default Trade;
