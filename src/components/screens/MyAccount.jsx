import React from 'react'
import TopBar from '../constants/TopBar'
import SecondaryBtn from '../constants/buttons/SecondaryBtn'

const MyAccount = () => {
  return (
    <div className="px-5 py-7 sm:ml-64">
      <TopBar heading='Connected Apps' title='My Account' />
      <div className='mt-7'>
        <SecondaryBtn fw='ba' name='BirDogg App' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
        <SecondaryBtn fw='an' name='Application Name' />
      </div>

    </div>
  )
}

export default MyAccount