import React from 'react';
import dotUi from '../../dist/images/Dot_Grid.svg'
import google from '../../dist/images/Google.svg'
import PrimaryButton from '../constants/buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import SignInput from '../constants/buttons/SignInput';
import TopBar from '../constants/TopBar';

const SignIn = () => {
  return (
    <div className="px-2 md:px-5 py-7 sm:ml-64">
      <section className='mb-7'>
        <TopBar heading='Existing User' title='Sign In' />
      </section>
      <section className='sign'>
        <div className="inner-box-2 md:absolute">
          <img className='dotui-1 md:absolute bottom-0 right-0 hidden md:block' src={dotUi} alt="" />
          <img className='dotui-2 hidden md:block' src={dotUi} alt="" />
          <div className="sign-form md:absolute md:top-16 md:left-16">
            <div className="Card w-96 p-6 bg-white rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Text self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                <div className="SignIn self-stretch text-slate-950 text-base font-['SF Pro']">Sign In</div>
                <div className="self-stretch text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <SignInput type='email' name='email' placeholder='Email Address' />
                <SignInput type='password' name='password' placeholder='Password' />
              </div>
              <div className="Row self-stretch justify-start items-center gap-6 inline-flex">
                <Link to='/sign_in'>
                  <PrimaryButton primaryBtn='Continue' />
                </Link>
                <div className="grow shrink basis-0 h-6 justify-end items-center gap-2 flex cursor-pointer">
                  <img src={google} alt="" />
                  <div className="text-center text-slate-950 text-sm">Continue Using Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn