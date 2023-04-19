import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar bg-primary text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              <li className="hover-effect">
                <ActiveLink to="/">Shop</ActiveLink>
              </li>
              <li className="hover-effect">
                <ActiveLink to="/orders">Orders</ActiveLink>
              </li>
              <li className="hover-effect">
                <ActiveLink to="/inventory">Inventory</ActiveLink>
              </li>
              <li className="hover-effect">
                <ActiveLink to="/login">Login</ActiveLink>
              </li>
              <li className="hover-effect">
                <ActiveLink to="/signup">Sign Up</ActiveLink>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover-effect">
              <ActiveLink to="/">Shop</ActiveLink>
            </li>
            <li className="hover-effect">
              <ActiveLink to="/orders">Orders</ActiveLink>
            </li>
            <li className="hover-effect">
              <ActiveLink to="/inventory">Inventory</ActiveLink>
            </li>
            <li className="hover-effect">
              <ActiveLink to="/login">Login</ActiveLink>
            </li>
            <li className="hover-effect">
                <ActiveLink to="/signup">Sign Up</ActiveLink>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

/* 

      */
