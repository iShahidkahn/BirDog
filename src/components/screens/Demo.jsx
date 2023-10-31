import React from "react";
import SearchBox from "../constants/SearchBox";
import Filter from "../constants/Filter";
import Table from "../constants/Table";
import PrimaryButton from "../constants/buttons/PrimaryButton";

const Demo = () => {
  return (
    <div className="px-4 sm:ml-64">
      <div className="grid grid-cols-5 mb-7">
        <div className="col-span-5 py-8">
          <SearchBox />
        </div>
        <div className="col-span-5 md:flex">
          <div className="md:mr-5">
            <Filter />
          </div>
          <div className="bg-white overflow-x-auto p-5  mb-2 flex flex-col rounded-2xl">
            <div className="bg-white overflow-x-auto ">
              <Table />
            </div>
            <div className="flex flex-wrap justify-between items-center mt-5">
              <div className="flex items-center my-3">
                <input
                  type="text"
                  placeholder="File Path..."
                  className="inputField w-[275px] placeholder:text-slate-400"
                  style={{ background: "white" }}
                />
              </div>
              <div className="flex items-center mt-4 sm:mt-0 gap-3">
                <PrimaryButton primaryBtn="Download CSV" />
                <PrimaryButton primaryBtn="Download Word" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
