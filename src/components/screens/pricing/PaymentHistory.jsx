import React from "react";
import PrimaryButton from "../../constants/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import TopBar from "../../constants/TopBar";

const PaymentHistory = () => {
    return (
        <div className="px-2 md:px-5 py-7 sm:ml-64">
            <section className="mb-7">
                <TopBar heading="Pricing" title="Purchase History" />
            </section>
            <section className="plans">
                <div className="plans-box">
                    <div className="Card shadow-lg mx-3 md:mx-0 px-6 md:px-6 py-10 bg-white rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 md:col-span-1">
                                <div className="self-stretch text-slate-950 text-base font-['SF Pro']">
                                    Selected Plan:
                                </div>
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
                                </div>
                            </div>
                            <div className="col-span-3 shadow-sm md:col-span-2 mt-6 md:mt-0 border h-auto md:ms-10 rounded-xl px-5 py-3">
                                <div className="">
                                    <div className="md:flex justify-between">
                                        <div className="my-2 md:my-0">
                                            <div className="text-slate-950 text-base font-['SF Pro'] mb-2">
                                                Subscription
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                Standard Plan
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                Standard Plan
                                            </div>
                                        </div>
                                        <div className="my-2 md:my-0">
                                            <div className="text-slate-950 text-base font-['SF Pro'] mb-2">
                                                Ammount Paid
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                $99
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                $99
                                            </div>
                                        </div>
                                        <div className="my-2 md:my-0">
                                            <div className="text-slate-950 text-base font-['SF Pro'] mb-2">
                                                Next Bill Due
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                Januray 2024
                                            </div>
                                            <div className="self-stretch leading-6 text-slate-400 text-sm font-normal font-['SF Pro'] leading-7">
                                                Januray 2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/pricing">
                                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    Cancel Subscription
                                </button>
                            </Link>
                            <Link to="/pricing/payment_history">
                                <button type="button" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    Pause Subscription
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PaymentHistory