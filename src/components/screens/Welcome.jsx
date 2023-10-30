import React from 'react'
import i_star from '../../dist/icons/star.svg'

const Welcome = () => {
    return (
        <div className="px-5 py-7 sm:ml-64">
            <section className='mb-10'>
                <h5 className='h5 mb-1'>Welcome To</h5>
                <h2 className='h2'>The BirDog Application</h2>
                <p className='mt-8'>BirDog is an advanced real estate tool designed for investors, real estate agents, wholesalers, and real estate enthusiasts. It leverages cutting-edge technology and extensive data analysis to identify undervalued properties in any given market.</p>
            </section>
            <section className='my-10'>
                <div class="w-40 h-11 px-4 py-3 bg-indigo-100 rounded-3xl justify-start items-center gap-2 inline-flex">
                    <div class="Star w-5 h-5 justify-center items-center flex">
                        <img src={i_star} alt="" />
                    </div>
                    <div class="KeyFeatures text-indigo-500 text-sm font-['SF Pro'] uppercase leading-none">Key Features</div>
                </div>
                <ul className='list-disc space-y-3 ml-5 my-3'>
                    <li><strong className='font-semibold'>Investment Analysis</strong> : The BirDog App analyzes each property and takes many variables into account. These variables are entered into the formulas that every investor uses.</li>
                    <li><strong className='font-semibold'>Investment Analysis</strong> : The BirDog App performs detailed comparable analysis, comparing target properties with similar listings in the area. This helps in determining if a property is priced below market value.</li>
                    <li><strong className='font-semibold'>Investment Analysis</strong> : The BirDog App analyzes each property and takes many variables into account. These variables are entered into the formulas that every investor uses.</li>
                </ul>
            </section>
            <section>
                <div class="w-40 h-11 px-4 py-3 bg-indigo-100 rounded-3xl justify-start items-center gap-2 inline-flex">
                    <div class="Star w-5 h-5 justify-center items-center flex">
                        <img src={i_star} alt="" />
                    </div>
                    <div class="KeyFeatures text-indigo-500 text-sm font-['SF Pro'] uppercase leading-none">benefits</div>
                </div>
                <ul className='list-disc space-y-3 ml-5 my-3'>
                    <li><strong className='font-semibold'>Time Efficiency</strong> : The BirDog App streamlines the property search process, saving users valuable time in identifying potential investments.</li>
                    <li><strong className='font-semibold'>Data-Driven Decisions</strong> : Users can make informed decisions backed by comprehensive data analysis and market trends.</li>
                    <li><strong className='font-semibold'>Maximized ROI</strong> : The software helps users target undervalued properties with the highest potential for return on investment.</li>
                    <li><strong className='font-semibold'>User Friendly Interface</strong> :  An intuitive dashboard and user-friendly interface make it accessible to both experienced investors and newcomers to real estate.</li>
                    <li><strong className='font-semibold'>Revolutionized Process</strong> :  Instead of taking a property to a tool to be analyzed, the software analyzes all properties and tells the user which ones will be the best potential deals.</li>
                </ul>
            </section>
        </div>
    )
}

export default Welcome