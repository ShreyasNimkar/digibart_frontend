import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

const SliderDemo = () => (
  <Slider.Root
    className="SliderRoot w-full"
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
);

export default SliderDemo;
