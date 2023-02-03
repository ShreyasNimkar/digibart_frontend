import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

const AddStack = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="Button bg-white rounded-full text-black text-6xl"
        size="small"
      >
        <span className="rounded-full text-4xl text-black">+</span>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Add to Stack</Dialog.Title>

        {/* <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset> */}

        {/* map an array of names of listings of users products */}
        <div>
          <Dialog.Close asChild>
            <div className="flex items-center justify-around">
              <button className="Button green ">Create Stack</button>
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

export default AddStack;
