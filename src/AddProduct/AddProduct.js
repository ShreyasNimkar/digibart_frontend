import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import SliderDemo from "../Slider/Slider";
const AddProduct = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
        Add Item
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Add Your Item</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          {/* Make changes to your profile here. Click save when you're done. */}
        </Dialog.Description>
        <form className="w-full" action="">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Item Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Item Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Category"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Estimated Cost
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Rs.XXXX"
            />
          </div>
          <div className="w-full flex flex-col text-left ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Item Name"
            >
              Condition on a scale of 0-5
            </label>
            <SliderDemo />
          </div>
          <div className="flex items-center flex-col justify-between"></div>
        </form>
        <div className="flex items-center justify-around mt-3">
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
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

export default AddProduct;
