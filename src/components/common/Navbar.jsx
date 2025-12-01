import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MySite
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/chatbot" className="text-white hover:text-gray-300">
            Chatbot
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
