import React from "react";

const SecondaryBtn = (props) => {
  return (
    <div class="w-64 h-14 p-2 bg-white rounded-3xl justify-start items-center gap-4 inline-flex cursor-pointer">
      <div class="w-10 h-10 bg-indigo-50 rounded-3xl justify-center items-center gap-2.5 flex">
        <div class="text-center text-indigo-500 text-xs uppercase leading-3">
          {props.fw}
        </div>
      </div>
      <div class="grow shrink basis-0 text-slate-950 text-sm leading-none">
        {props.name}
      </div>
    </div>
  );
};

export default SecondaryBtn;
