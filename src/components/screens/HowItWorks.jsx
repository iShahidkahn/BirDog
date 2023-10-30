import React from 'react'
import TopBar from '../constants/TopBar'
import PrimaryButton from '../constants/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
    return (
        <div className="px-5 py-7 sm:ml-64">
            <div className="flex justify-between items-center mb-10">
                <TopBar heading='The Process' title='How it Works' />
                <Link to='/app_demo'>
                    <PrimaryButton primaryBtn='Go to Demo' />
                </Link>
            </div>
            <div className="flex-col gap-8 inline-flex self-stretch text-slate-950 text-base font-normal leading-loose">
                <div>The BirDog App utilizes a very simple and streamlined process, doing all the heavy lifting for our users. </div>
                <div>We start off with analyzing the market, finding all the properties that have comps. A comp must meet a certain set of criteria. It must have the same number of beds and baths, must be within a certain radius of the deal in question and must have a square footage that is between +/- a certain number of square feet. Our default preset uses 200 for this value. </div>
                <div>Some properties will not have comps and will not be included in the final list. This is ok. If you are in a market that doesn’t have any properties populated there are a few filters that you should adjust to make some properties appear. </div>
                <div>After we have determined which properties have comps, we then need to determine the ARV (After Repair Value). We determine ARV by finding the average price per square foot of all the comps of that property and multiplying that number by the square footage of the deal in question.   </div>
                <div>After we find the ARV, we must then find the MAO (Maximum Acceptable Offer). Since the BirDog App does not have access to the images and does not use AI, we find offers based on different levels of rehab. These rehab levels are determined by the user in the App page. You may also see these in the demo page. It is suggested that the user begins with using the presets first and then slowly adjusting one number here and there to get a feel for how changing the values changes the data and how many properties are populated. </div>
                <div>To find the MAO, we use the formula, ARV multiplied by 0.7 minus expenses. Note: 0.7 is the default but can be changed and set in a new preset. </div>
                <div>The expenses in the above formula are comprised of closing costs, which are determined as a percentage of the MAO. Expenses also include rehab costs. For the rehab costs we will have 5 numbers. the first is a fixed cost that we can set for basic lipstick/paint etc. The other 4 are determined by taking a cost per square foot value and multiplying that by the square footage of the property. We also include the assignment fee in the expenses.</div>
                <div>After calculating these values, we will go ahead and calculate some other important values, including but not limited to: Cash on Cash Return, Financing, Monthly Payments, Total Cash Needed, All in percentage. </div>
                <div>Lastly, we like to sort based on how far the max offer is below the asking price. This will allow us to see the properties that we can offer close to what is being asked and still make money. </div>
                <div>Obviously we will still offer below what is being asked. We can go into the conversation knowing that we will have a larger spread if we can get the property under contract under the asking price.</div>
            </div>
        </div>
    )
}

export default HowItWorks