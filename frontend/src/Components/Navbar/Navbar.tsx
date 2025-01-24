import React from "react";
import logo from "./stonks.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
interface Props {}

const Navbar = (props: Props) => {
  const {isLoggedIn, user, logout} = useAuth(); 
  return (
    <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      {/* Logo and Search Section */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 lg:h-16 transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link
          to="/search"
          className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Search
        </Link>
      </div>
  
      {/* Auth Section */}
      <div className="hidden lg:flex items-center space-x-6">
        {isLoggedIn() ? (
          <>
            <span className="text-base font-medium text-gray-800">
              Welcome, <span className="font-semibold text-blue-600">{user?.userName}</span>
            </span>
            <button
              onClick={logout}
              className="px-6 py-2 text-white font-medium bg-green-500 rounded-md shadow-lg hover:bg-green-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 font-medium text-white bg-green-500 rounded-md shadow-lg hover:bg-green-600"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  </nav>
  

  

  );
};

export default Navbar;
