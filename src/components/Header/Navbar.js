import React, { useState } from 'react';

import fsclogo from '../../assets/images/navbar/fsc-logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNavMenu = () => {
     setIsNavOpen(!isNavOpen);
   };


  return (
    <>
      <div className="w-full flex items-center justify-between px-5 md:px-10 lg:px-[106px] 2xl:px-44 z-50 py-[10px] font-geo bg-white-100 ">
        <div className="logo">
          <img src={fsclogo} alt=""></img>
        </div>
        <div className="items-center nav-menu hidden lg:inline-flex gap-[126px]">
          <div className="nav-list">
            <ul className="flex items-center justify-center gap-[36px] list-none font-gcReg text-small ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-btns flex items-center gap-[33px] text-small font-gcReg">
            <button>Login</button>
            <button className=" py-[14px] px-[28px] border-none outline-none rounded-lg bg-blue-104 text-yellow-101 ">
              Sign up
            </button>
          </div>
        </div>
        <i
          className=" lg:hidden 2xl:hidden fa-sharp fa-solid fa-bars fa-2xl max-sm:text-2xl"
          style={{ color: "#000000" }}
          onClick={toggleNavMenu}
        ></i>
        {isNavOpen && (
          <div className="fixed inset-0 z-50 bg-opacity-90 bg-blue-104">
            <nav className="fixed top-0 left-0 flex flex-col w-full h-full px-10">
              <ul className="flex flex-col items-center justify-center gap-4 mt-16 text-subHeading text-yellow-101 md:text-subSubHeading ">
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
              </ul>
              <div className="flex flex-col items-center justify-center gap-5 mt-10 text-subHeading md:text-subSubHeading">
                <button className="text-blue-100 ">Login</button>
                <button className="border-none py-[14px] px-[28px] rounded-lg outline-none bg-blue-104 text-yellow-101">
                  Sign up
                </button>
              </div>

              <button
                className="absolute p-4 right-1 top-1 md:top-1 md:right-6"
                onClick={toggleNavMenu}
              >
                <i className="fas fa-times fa-2xl text-yellow-101"></i>
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar