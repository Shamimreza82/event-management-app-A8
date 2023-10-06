import React from "react";
import { NavLink } from "react-router-dom";

const Navber = () => {



  return (
    <div className="navbar bg-base-200 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 font-bold p-1 rounded-md text-white " : "p-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600  p-1 rounded-md text-white " : "p-1"
              }
            >
              Sevices
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Tech Conferences and Expos
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base gap-5 mr-5">
          <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600  p-1 rounded-md text-white " : "p-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 p-1 rounded-md text-white " : ""
              }
            >
              Sevices
            </NavLink>
          </ul>
        </div >
        <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 font-bold p-1 rounded-md text-white " : ""
              }
            >
              Login
            </NavLink>
      </div>
    </div>
  );
};

export default Navber;
