import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Style from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

function Navbar() {

  const { Token, setToken } = useContext(UserContext);
  const{numOfCartItems}=useContext(CartContext)
  const navigate = useNavigate();
  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={""}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FreshCart
            </span>
          </Link>
          <button 
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full lg:flex lg:w-auto grow"
            id="navbar-default"
          >
         
            <ul className="font-medium flex flex-col ms-auto p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {Token !== null ? (
                <>
                  <li>
                    <NavLink
                      to="home"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="brands"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="categories"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="products"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="cart"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Cart
                    </NavLink>
                   
                  </li>
                  <li>
                    <NavLink
                      to="wishlist"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      WishList
                    </NavLink>
                   
                  </li>
                </>
              ) : null}
            </ul>
         
            <ul className="font-medium flex flex-col ms-auto p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {Token == null ? (
                <>
                  <li>
                    <NavLink
                      to=""
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="register"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span
                      onClick={logOut}
                      className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      logOut
                    </span>
                  </li>
                  <li>
                    <span className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      {numOfCartItems}
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                  </li>
                </>
              )}

              <li>
                <li className=" space-x-3">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-github"></i>
                </li>
              </li>
            </ul>
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
