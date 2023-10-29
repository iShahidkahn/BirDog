import React from 'react'

const InputButton = (props) => {
    return (
        <div className="self-stretch  bg-white justify-start items-center gap-4 inline-flex">
            <input className="grow shrink px-5 py-4 rounded-3xl border border-slate-200 basis-0 placeholder:text-slate-950 text-sm" type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default InputButton