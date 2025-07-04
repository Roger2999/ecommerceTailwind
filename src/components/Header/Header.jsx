import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "../Badge";
import "./Header.css";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center">
            <NavLink
              to="/"
              className="-m-1.5 p-1.5 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="public\car.svg" className="h-8 w-auto" />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 nav-container ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-900 hover:text-indigo-500 focus-visible:text-indigo-600"
                }`
              }
            >
              Productos
            </NavLink>
            <NavLink
              to="/car"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-900 hover:text-indigo-500 focus-visible:text-indigo-600"
                }`
              }
            >
              <Badge />
            </NavLink>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-900 hover:text-indigo-500 focus-visible:text-indigo-600"
                }`
              }
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-lg sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                className="-m-1.5 p-1.5 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                <img
                  alt="Logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-gray-900 hover:bg-gray-50 focus-visible:bg-indigo-50 focus-visible:text-indigo-700"
                      }`
                    }
                  >
                    Productos
                  </NavLink>
                  <NavLink
                    to="/car"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-gray-900 hover:bg-gray-50 focus-visible:bg-indigo-50 focus-visible:text-indigo-700"
                      }`
                    }
                  >
                    Carrito
                  </NavLink>
                </div>
                <div className="py-6">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-gray-900 hover:bg-gray-50 focus-visible:bg-indigo-50 focus-visible:text-indigo-700"
                      }`
                    }
                  >
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};
