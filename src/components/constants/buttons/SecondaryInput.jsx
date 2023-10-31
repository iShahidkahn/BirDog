import React from 'react';

const SecondaryInput = (props) => {
    return (
        <div className="w-56 flex-col justify-start items-start gap-4 flex mb-7">
            <div className="self-stretch text-slate-400 text-xs uppercase">
                {props.optionLabel}
            </div>
            <div className="flex">
                <div className="inputField rehab">
                    <span className=" text-slate-400 text-xs font-thin">$</span>
                    <input
                        type="text"
                        placeholder={`Value...`}
                        className="text-slate-950 w-[95px] border-0"
                        value={props.inputValue}
                        onChange={props.onChange}
                    />
                    <span className=" text-slate-400 text-xs font-thin">Per Sq. Ft</span>
                </div>
            </div>
        </div>
    );
};

export default SecondaryInput;