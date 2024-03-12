import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="p-0 w-[80px] mt-0.2 max-h-[80px] inline-block">
        <img src="/images/logo.svg" alt="ahsan" />
      </div>
      <div className="hidden md:flex items-center flex-flow-row nowrap h-full justify-end relative mr-auto ml-5">
        <Link to="/" className="flex align-middle py-0 px-3">
          <img
            src="/images/home-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            Home
          </span>
        </Link>
        <Link to="/" className="flex align-middle py-0 px-3">
          <img
            src="/images/search-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            Search
          </span>
        </Link>
        <Link to="/" className="flex align-middle py-0 px-3">
          <img
            src="/images/watchlist-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            WatchList
          </span>
        </Link>
        <Link to="/" className="flex align-middle py-0 px-3">
          <img
            src="/images/original-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            Orignals
          </span>
        </Link>
        <Link to="/home" className="flex align-middle py-0 px-3">
          <img
            src="/images/movie-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            Movies
          </span>
        </Link>
        <Link to="/home" className="flex align-middle py-0 px-3">
          <img
            src="/images/series-icon.svg"
            alt="HOME"
            className="h-7 min-w-7 w-7"
          />
          <span className="text-base font-medium tracking-wide py-1 px-1 whitespace-nowrap relative uppercase">
            Series
          </span>
        </Link>
      </div>
      <Link to="/login">
      <button className="bg-black py-3 px-6 uppercase tracking-wide border border-solid border-gray-200 rounded-md hover:bg-white hover:text-black hover:border-transparent font-bold">
        Login
      </button>
      </Link>
    </div>
  );
};

export default Header;
