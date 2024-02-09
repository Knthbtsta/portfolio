import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-screen bg-white text-xl py-4 sticky top-0">
      <nav
        className="max-w-[98rem] w-full mx-auto px-4 md:flex sm:items-center md:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="h-50 w-50 overflow-hidden">
            <img
              src="logo.png"
              alt="React Image"
              className="h-full w-full object-center
              sm:w-[100px] sm:h-[30px] md:w-[200px] md:h-[50px]"
            />
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#C8AE7D#] text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#C8AE7D] transition-all text-sm dark:bg-[#765827] dark:hover:bg-[#65451F] dark:border-[#65451F] dark:text-white  dark:focus:ring-offset-[#65451F]"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:gap-10 sm:gap-3 mt-5 md:flex-row md:items-center sm:justify-start md:mt-0 md:pl-[50px]">
            <Link to="/">
              <p className="font-medium text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] text-[#765827] hover:text-[#C8AE7D]">
                HOME
              </p>
            </Link>

            <Link to="/#portfolio">
              <p className="font-medium text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] text-[#765827] hover:text-[#C8AE7D]">
                PORTFOLIO
              </p>
            </Link>

            <Link to="/#inquiries">
              <p className="font-medium text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] text-[#765827] hover:text-[#C8AE7D]">
                INQUIRIES
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
