import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import SliderDistance from "../../Slider/SliderDistance";
import SliderPrice from "../../Slider/SliderPrice";
const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">
          <p className="text-3xl text-black">Filters</p>
        </Dialog.Title>
        <Dialog.Description className="DialogDescription">
          {/* Make changes to your profile here. Click save when you're done. */}
        </Dialog.Description>
        <form className="w-full" action="">
          <div className="w-full flex flex-col text-left ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Radius of Distance
            </label>
            <div className="w-full flex items-center justify-around">
              <SliderDistance />
            </div>
          </div>
          <div className="flex text-black justify-around items-center gap-3">
            <div className="mb-2 w-1/2 text-black">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Category
              </label>
              <select
                className="w-full shadow appearance-none border rounded py-2  text-gray-400  focus:outline-none focus:shadow-outline"
                id="cars"
                name="cars"
                placeholder="General"
              >
                <option placeholder="General" className="text-black" value="">
                  General
                </option>
                <option className="text-black" value="saab">
                  Saab
                </option>
                <option className="text-black" value="fiat">
                  Fiat
                </option>
                <option className="text-black" value="audi">
                  Audi
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block w-full text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enable Stacks
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enable Solo
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center gap-3">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Estimated Cost
              </label>
              <SliderPrice />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Age of Product
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="(years)"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-around items-center "></div>
        </form>
        <div>
          <Dialog.Close asChild>
            <div className="flex items-center justify-around">
              <button className="Button green ">Save changes</button>
            </div>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
