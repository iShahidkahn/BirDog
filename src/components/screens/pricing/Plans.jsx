import React from "react";
import PrimaryButton from "../../constants/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import TopBar from "../../constants/TopBar";

const Plans = () => {
  return (
    <div className="px-2 md:px-5 py-7 sm:ml-64">
      <section className="mb-7">
        <TopBar heading="Pricing" title="Plans" />
      </section>
      <section className="plans">
        <div className="plans-box">
          <div className="Card shadow-lg w-78 px-6 py-10 bg-white rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
            <div className="">
              <div className="self-stretch text-slate-950 text-2xl font-['SF Pro']">
                Standard Plan
              </div>
              <div className="self-stretch text-slate-950 text-base font-['SF Pro']">
                $99/mo + $1 per report
              </div>
              <div className="mt-6">
                <div className="self-stretch text-slate-950 text-lg font-['SF Pro']">
                  Includes:
                </div>
                <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                  Access to the Birdog application. <br />
                  Unlimited Cities. (all that are in the city dropdown) <br />
                  Unlimited Buy Boxes.
                </div>
                <div className="self-stretch text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                </div>
                <div className="self-stretch text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                </div>
              </div>
            </div>
            <div>
              <Link to="/pricing/payment">
                <PrimaryButton primaryBtn="Choose Plan"  />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
