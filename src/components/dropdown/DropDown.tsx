/* eslint-disable react/jsx-props-no-spreading */
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useUser from '../../hooks/useUser';
import { useLogout } from '../../hooks/authHooks';

export default function DropDown() {
  const [isUser] = useUser();
  const [logout] = useLogout();

  return (
    <div className="content-center mt-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 text-sm font-medium text-white bg-gray-300 rounded-md bg-opacity-80 hover:bg-opacity-100 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              className="rounded-full w-8 h-8 mr-2 my-1 object-cover"
              src={isUser?.images[0]?.url}
              alt={isUser?.display_name}
            />
            <h1 className="text-center font-semibold my-2.5 text-black">
              {isUser?.display_name}
            </h1>
            <ChevronDownIcon
              className="my-2 w-5 h-5 ml-2 -mr-1 text-black hover:text-black-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={logout}
                    className={`${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
