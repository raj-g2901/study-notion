//Link tag k undar jo bhi component hoga wo bhi sath me render ho jayega
import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img src={logo} alt="logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className=" text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-white py-[8px] px-[12px] rounded-[8px] 
            border bg-sky-800 border-sky-600">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-white py-[8px] px-[12px] rounded-[8px] 
            border bg-sky-800 border-sky-600">Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="text-white py-[8px] px-[12px] rounded-[8px] 
            border bg-sky-800 border-sky-600"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-white py-[8px] px-[12px] rounded-[8px] 
            border bg-sky-800 border-sky-600">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}
