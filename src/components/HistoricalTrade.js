import React from "react";
import { Bar } from "react-chartjs-2";
const HistoricalTrade = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  //   const labels = Utils.months({ count: 7 });
  const data = {
    // labels: labels,
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: Utils.numbers(NUMBER_CFG),
      //     borderColor: Utils.CHART_COLORS.red,
      //     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      //   },
      //   {
      //     label: "Dataset 2",
      //     data: Utils.numbers(NUMBER_CFG),
      //     borderColor: Utils.CHART_COLORS.blue,
      //     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      //   },
    ],
  };
  const config = {
    type: "bar",
    // data: data,
    options: {
      indexAxis: "y",
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: "right",
        },
        title: {
          display: true,
          text: "Chart.js Horizontal Bar Chart",
        },
      },
    },
  };
  return (
    <div className="flex flex-col h-4/5 gap-2 ">
      <div className="flex items-center overflow-hidden justify-around h-1/2">
        <div className="w-1/3 border-white border-1 gap-0.5 h-2/3 overflow-y-scroll flex flex-row flex-wrap items-center justify-around">
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>{" "}
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
        </div>
        <div>was offered for :</div>
        <div className="w-1/3 border-1 border-white border-1 gap-0.5 h-2/3 overflow-y-scroll flex flex-row flex-wrap items-center justify-around">
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>{" "}
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
          <div className="h-full w-1/3 bg-yellow-400">asd</div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full">
        <div className="w-1/3 flex items-center justify-center"></div>
        <div className="w-1/3 flex items-center justify-center">
          by USeurohaww
        </div>
        <div className="w-1/3 flex items-center justify-center"></div>
      </div>
      <div className="w-full h-3/5 border-1 border-b-white">
        {/* <Bar /> */}
      </div>
    </div>
  );
};

export default HistoricalTrade;
