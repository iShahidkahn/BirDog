import React from "react";

const Input = (props) => {
  return (
    <div className="w-56 flex-col justify-start items-start gap-4 flex mb-7 main-input">
      <div className="self-stretch text-slate-400 text-xs uppercase">
        {props.optionLabel}
      </div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="inputField placeholder:text-slate-950"
      />
    </div>
  );
};

export default Input;
