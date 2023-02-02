import React from "react";

const landing = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="w-full h-full absolute flex justify-around items-center">
        <img
          className="h-1/2 opacity-90 -z-30 md:h-4/5 xl:h-screen lg:h-screen "
          src="./assets/pngholo.png"
          alt="blob"
        />
      </div>
      <div className="w-screen h-screen flex justify-evenly items-center">
        <a
          href="#_"
          class="relative text-center p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
        >
          <span class="w-full  h-full bg-gradient-to-br from-[#FF3CAC] via-[#784BA0] to-[#2b86c5] group-hover:from-[#2b86c5] group-hover:via-[#784BA0] group-hover:to-[#FF3CAC] absolute"></span>
          <span class="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">Guest</span>
          </span>
        </a>
        <a
          href="#_"
          class="relative text-center p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
        >
          <span class="w-full  h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
          <span class="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">Login</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default landing;
