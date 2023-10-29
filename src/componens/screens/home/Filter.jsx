import React from 'react'
import Slider from '../../constants/Slider'

const Filter = () => {

    return (
        <>
            <div className="justify-start items-start gap-8 inline-flex px-3 mb-8">
                <div className="w-56 text-slate-950 font-medium">Home Filters</div>
                <div className="w-56 text-slate-950 font-medium">Home Filters</div>
            </div>
            <Slider id='minmax-range' min='0' max='4000' steps='1' sliderLabel='City' optionLabel='Percentage of ARV' />
            <Slider id='minmax-range' min='0' max='4' steps='1' sliderLabel='Min beds' optionLabel='Rent Multiplier' />
            <Slider id='minmax-range' min='0' max='4' steps='1' sliderLabel='Min beds' optionLabel='Rent Multiplier' select={true} />
        </>

    )
}

export default Filter