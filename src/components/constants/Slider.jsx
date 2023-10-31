import React, { useState } from "react";

export default function Slider(props) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  const formattedSliderValue =
    props.min === "2000"
      ? sliderValue
      : new Intl.NumberFormat().format(sliderValue);

  return (
    <div className="w-56 h-20 flex-col justify-start items-start gap-4 flex mb-8">
      <div className="City self-stretch text-slate-400 text-xs uppercase">
        {props.label}
      </div>
      <div
        className="bg-slate-50 border border-slate-200 justify-start items-center w-56 inline-flex"
        style={{ padding: "16px 20px", borderRadius: "32px", height: "55px" }}
      >
        <div className="justify-start items-center flex">
          <input
            type="range"
            id={props.id}
            className="custom-range-slider"
            min={props.min}
            max={props.max}
            step={props.steps}
            value={sliderValue}
            onChange={handleChange}
          />
        </div>
        <div className="0 w-12 text-right text-slate-950 text-sm font-normal font-['SF Pro']">
          {props.dollar}
          {formattedSliderValue}
        </div>
      </div>
    </div>
  );
}
