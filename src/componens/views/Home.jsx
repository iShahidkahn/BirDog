import React from 'react'
import SearchBox from '../screens/home/SearchBox'
import Filter from '../screens/home/Filter'
import Table from '../constants/Table'
import PrimaryButton from '../constants/PrimaryButton'

const Home = () => {
  return (
    <div className="px-4 sm:ml-64">
      <div className="grid grid-cols-5">
        <div className="col-span-5 py-8">
          <SearchBox />
        </div>
        <div className="flex col-span-5">
          <div className="">
            <Filter />
          </div>
          <div className="overflow-x-auto max-h-[100%] bg-white p-5 rounded-2xl">
            <Table />
            <PrimaryButton primaryBtn='Save Configuration'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home