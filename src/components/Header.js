import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import login from "../store/action/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const  {uid}  = useSelector((state) => state.auth);


  const handleLogin = () => {
    dispatch(login(navigate));
  };

  const handleSignout = () =>{
    localStorage.clear()
    window.location.reload()
    navigate('/login')
  }

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
      {uid == null ? (
       
        <button
          onClick={handleLogin}
          className="bg-black py-3 px-6 uppercase tracking-wide border border-solid border-gray-200 rounded-md hover:bg-white hover:text-black hover:border-transparent font-bold"
        >
          Login
        </button>
      ) : (
        <button
        onClick={handleSignout}
        className="bg-black py-3 px-6 uppercase tracking-wide border border-solid border-gray-200 rounded-md hover:bg-white hover:text-black hover:border-transparent font-bold"
      >
        Logout
      </button>
      )}
    </div>
  );
};

export default Header;
