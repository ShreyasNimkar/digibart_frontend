import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

const SliderDemo = () => (
  <form className="w-full flex justify-around items-center">
    <Slider.Root
      className="SliderRoot"
      min={0}
      max={5}
      step={1}
      aria-label="Volume"
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" />
    </Slider.Root>
  </form>
);

export default SliderDemo;
