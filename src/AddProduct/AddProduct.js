import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import { useState } from "react";
import SliderCondition from "../Slider/SliderCondition";
import {addItem} from "../controllers/productController";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState()
  const [mrp, setMrp] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [category, setCategory] = useState();
  const [age, setAge] = useState();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImages(event.target.files)
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const submitHandler = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    const tempImg = [...images]
    const formData={
      title,
      description,
      mrp,
      age,
      lat: lat.toString(),
      long: long.toString(),
      category,
      images:tempImg
    }

    console.log(formData)
    await addItem(formData);

  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet" size="large">
          Add Item
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle ">
            <p className="text-4xl mb-1 text-black">Add Your Item</p>
          </Dialog.Title>

          <form className="w-full" action="">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Item Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Item Name"
                value={title}
                onChange={el=>{setTitle(el.target.value)}}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Description
              </label>
              <textarea
                rows={1}
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={el=>{setDescription(el.target.value)}}
              />
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
                  name="category"
                  placeholder="General"
                  value={category}
                  onChange={el=>{setCategory(el.target.value)}}
                >
                  <option
                    placeholder="General"
                    className="text-black"
                    value="volvo"
                  >
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
                  Tags
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Tags here"
                />
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
                <input
                  className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="mrp"
                  placeholder="Rs.XXXX"
                  value={mrp}
                onChange={el=>{setMrp(el.target.value)}}
                />
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
                  name="age"
                  type="text"
                  placeholder="(years)"
                  value={age}
                onChange={el=>{setAge(el.target.value)}}
                />
              </div>
            </div>
            <div className="w-full flex flex-col text-left ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Item Name"
              >
                Condition on a scale of 0-5
              </label>
              <div className="w-full flex items-center justify-around">
                <SliderCondition />
              </div>
            </div>
            <div className="w-full flex flex-col justify-around items-center ">
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Item Name"
                >
                  Add images
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="files"
                  type="file"
                  name="images"
                  multiple
                  placeholder=""
                  accept="image/*"
                  onChange={onImageChange}
                />
                <img className="h-10" src={image} alt="" />
              </div>
            </div>
          </form>
          <div className="flex items-center justify-around mt-3">
            <Dialog.Close asChild>
              <button onClick={submitHandler} className="Button green">
                Save changes
              </button>
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
};

export default AddProduct;
