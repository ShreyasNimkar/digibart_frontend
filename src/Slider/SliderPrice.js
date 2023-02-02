import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

const SliderPrice = () => (
  <Slider.Root
    className="SliderRoot"
    min={0}
    max={100}
    step={10}
    defaultValue={[25, 75]}
    aria-label="Volume"
    minStepsBetweenThumbs={1}
  >
    <Slider.Track className="SliderTrack">
      <Slider.Range className="SliderRange" />
    </Slider.Track>
    <Slider.Thumb className="SliderThumb" />
    <Slider.Thumb className="SliderThumb" />
  </Slider.Root>
);

export default SliderPrice;
