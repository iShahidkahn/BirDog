import React from "react";
import Slider from "./Slider";
import Input from "./buttons/Input";
import Select from "./buttons/Select";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryInput from "./buttons/SecondaryInput";

const Filter = () => {
  return (
    <div className="filter">
      <div className="justify-start items-start gap-8 inline-flex mb-8">
        <div className="w-56 text-slate-950 font-medium">Home Filters</div>
        <div className="w-56 text-slate-950 font-medium">Home Filters</div>
      </div>
      <div className="flex justify-between items-start mb-6">
        <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden scroll-none px-1">
          <Select
            label="City"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Slider min="0" max="4000" steps="1" dollar="$" label="Min Price" />
          <Slider min="0" max="4000" steps="1" dollar="$" label="Max Price" />
          <Slider min="0" max="4" steps="1" label="Min beds" />
          <Slider min="0" max="4" steps="1" label="Max beds" />
          <Slider min="0" max="4" steps="1" label="Min Baths" />
          <Slider min="0" max="4" steps="1" label="Max Baths" />
          <Select
            label="home type"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Slider min="0" max="200" steps="1" label="Min Square Feet" />
          <Slider min="0" max="200" steps="1" label="Max Square Feet" />
          <Slider min="2000" max="2022" steps="1" label="Min Year Built" />
          <Slider min="2000" max="2022" steps="1" label="Max Year Built" />
          <Select
            label="garage spots"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Select
            label="pool type"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Select
            label="schools"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
        </div>
        <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden scroll-none px-1">
          <Input optionLabel="Percentage of ARV" placeholder="Enter Value..." />
          <Select
            label="select radius for comps"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Select
            label="square feet limits"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Select
            label="rent multiplier"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Input
            optionLabel="annual interest rate"
            placeholder="Enter Value..."
          />
          <Select
            label="Loan Term Years"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Input optionLabel="% financing" placeholder="Enter Value..." />
          <Input optionLabel="purchase cost %" placeholder="Enter Value..." />
          <Input
            optionLabel="operating expenses %"
            placeholder="Enter Value..."
          />
          <Input optionLabel="vacancy cost" placeholder="Enter Value..." />
          <Select
            label="percentile"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Input optionLabel="assignment fee" placeholder="Enter Value..." />
          <Input optionLabel="basic rehab" placeholder="Enter Value..." />
          <Select
            label="rehab % select"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Input optionLabel="% to search for" placeholder="Enter Value..." />
          <Slider
            min="0"
            max="4000"
            dollar="$"
            steps="1"
            label="max purchase price"
          />
          <Select
            label="use days on market for filter"
            option_one="Option One"
            option_two="Option Two"
            option_three="Option Three"
            option_four="Option Four"
          />
          <Slider min="0" max="30" steps="1" label="min days on market range" />
          <Slider min="0" max="30" steps="1" label="max days on market range" />
          <div className="w-56 text-slate-950 font-medium mb-5">
            Rehab Cost Table
          </div>
          <SecondaryInput optionLabel="light rehab" />
          <SecondaryInput optionLabel="medium rehab" />
          <SecondaryInput optionLabel="heavy rehab" />
          <SecondaryInput optionLabel="full gut" />
        </div>
      </div>
      <div className="border p-4 bg-white rounded-2xl">
        <div className="w-56 text-slate-950 font-medium">
          Save Configuration
        </div>
        <div className="text-slate-400 text-sm font-normal">
          Save Current Configuration as a Buy Box
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="w-56 flex-col justify-start items-start gap-4 flex">
            <input
              type="text"
              placeholder="Buy Box Name..."
              className="inputField w-64 placeholder:text-slate-400"
              style={{ background: "white" }}
            />
          </div>
          <PrimaryButton primaryBtn="Save Configuration" />
        </div>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 5.60839C17.4834 5.60839 17.4584 5.60839 17.4334 5.60839C13.025 5.16673 8.62502 5.00006 4.26669 5.44173L2.56669 5.60839C2.21669 5.64173 1.90835 5.39173 1.87502 5.04173C1.84169 4.69173 2.09169 4.39173 2.43335 4.35839L4.13335 4.19173C8.56669 3.74173 13.0584 3.91673 17.5584 4.35839C17.9 4.39173 18.15 4.70006 18.1167 5.04173C18.0917 5.36673 17.8167 5.60839 17.5 5.60839Z"
              fill="#EF4444"
            />
            <path
              d="M7.08335 4.76663C7.05002 4.76663 7.01668 4.76663 6.97502 4.75829C6.64168 4.69996 6.40835 4.37496 6.46668 4.04163L6.65002 2.94996C6.78335 2.14996 6.96668 1.04163 8.90835 1.04163H11.0917C13.0417 1.04163 13.225 2.19163 13.35 2.95829L13.5334 4.04163C13.5917 4.38329 13.3584 4.70829 13.025 4.75829C12.6834 4.81663 12.3584 4.58329 12.3084 4.24996L12.125 3.16663C12.0084 2.44163 11.9834 2.29996 11.1 2.29996H8.91668C8.03335 2.29996 8.01669 2.41663 7.89169 3.15829L7.70002 4.24163C7.65002 4.54996 7.38335 4.76663 7.08335 4.76663Z"
              fill="#EF4444"
            />
            <path
              d="M12.675 18.9584H7.32503C4.41669 18.9584 4.30003 17.3501 4.20836 16.0501L3.66669 7.6584C3.64169 7.31673 3.90836 7.01673 4.25003 6.99173C4.60003 6.97506 4.89169 7.2334 4.91669 7.57506L5.45836 15.9667C5.55003 17.2334 5.58336 17.7084 7.32503 17.7084H12.675C14.425 17.7084 14.4584 17.2334 14.5417 15.9667L15.0834 7.57506C15.1084 7.2334 15.4084 6.97506 15.75 6.99173C16.0917 7.01673 16.3584 7.3084 16.3334 7.6584L15.7917 16.0501C15.7 17.3501 15.5834 18.9584 12.675 18.9584Z"
              fill="#EF4444"
            />
            <path
              d="M11.3833 14.375H8.60831C8.26664 14.375 7.98331 14.0917 7.98331 13.75C7.98331 13.4083 8.26664 13.125 8.60831 13.125H11.3833C11.725 13.125 12.0083 13.4083 12.0083 13.75C12.0083 14.0917 11.725 14.375 11.3833 14.375Z"
              fill="#EF4444"
            />
            <path
              d="M12.0833 11.0416H7.91666C7.57499 11.0416 7.29166 10.7583 7.29166 10.4166C7.29166 10.075 7.57499 9.79163 7.91666 9.79163H12.0833C12.425 9.79163 12.7083 10.075 12.7083 10.4166C12.7083 10.7583 12.425 11.0416 12.0833 11.0416Z"
              fill="#EF4444"
            />
          </svg>
        </div>
        <div className="text-red-500 font-medium text-sm uppercase mt-1 cursor-pointer">
          Delete Current Buy Box
        </div>
      </div>
    </div>
  );
};

export default Filter;
