import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchBox() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="Dropdown w-72 h-12 p-2 bg-slate-50 rounded-3xl border border-slate-200 justify-start items-center gap-2 inline-flex">
            <div className="TextAndLine w-60 self-stretch p-2 justify-start items-center gap-4 flex">
              <div className="BuyBox text-slate-400 text-xs uppercase">Buy Box</div>
              <div className="self-stretch border-r border-slate-200"></div>
              <div className="ChooseAnOption text-slate-950 text-sm font-normal ">Choose an Option...</div>
            </div>
            <div className="w-8 self-stretch bg-indigo-500 rounded-3xl justify-center items-center gap-2.5 flex">
              <div className="h-3 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clipPath="url(#clip0_1_1613)">
                    <path d="M3.5 5L6.5 8L9.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1613">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/home'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Option 1
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/home'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Option 2
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/home'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Option 3
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="Button w-24 h-10 px-6 py-3 bg-indigo-500 rounded-3xl cursor-pointer justify-center items-center gap-2 inline-flex">
          <div className="Search text-center text-white text-sm ">Search</div>
        </div>
      </div>
    </>

  )
}
