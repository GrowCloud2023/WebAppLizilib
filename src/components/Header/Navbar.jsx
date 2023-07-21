import { Fragment, useState } from "react";
import {
  FaPencil,
  FaChevronDown,
  FaRegCreditCard,
  FaBarsStaggered,
} from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { BsBell, BsCheckLg } from "react-icons/bs";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = ({ showNav, setShowNav }) => {
  useState(showNav);

  return (
    <div
      className={`fixed bg-secondary w-full h-20 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <FaBarsStaggered
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            {showNav ? (
              <BsBell className="h-6 w-6 hidden md:block" />
            ) : (
              <BsBell className="h-6 w-6" />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notificaciones</p>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <BsCheckLg className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notificación</p>
                      <p className="text-sm text-gray-500 truncate">
                        Tu licitación ha sido acepatada
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <BsCheckLg className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notificación</p>
                      <p className="text-sm text-gray-500 truncate">
                        Tu licitación ha sido acepatada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            {showNav ? (
              <Menu.Button className="hidden md:inline-flex w-full justify-center items-center">
                <div>
                  <span className="hidden md:block font-medium text-gray-700">
                    Nombre de fantasía
                  </span>
                  <p>Nombre real</p>
                </div>
                <FaChevronDown className="ml-2 h-4 w-4 text-gray-700" />
              </Menu.Button>
            ) : (
              <Menu.Button className="inline-flex w-full justify-center items-center">
                <div>
                  <span className="hidden md:block font-medium text-gray-700">
                    Nombre de fantasía
                  </span>
                  <p>Nombre real</p>
                </div>
                <FaChevronDown className="ml-2 h-4 w-4 text-gray-700" />
              </Menu.Button>
            )}
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-primary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <FaPencil className="h-4 w-4 mr-2" />
                    Editar
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-primary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <FaRegCreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-primary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <FaCog className="h-4 w-4 mr-2" />
                    Configuración
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
