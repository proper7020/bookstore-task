import React, { useState } from "react";
import { Link } from "react-router-dom";



const BookStoreNav = ({  setInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState("");

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle search input changes
  const searchBook = () => {
    setInput(searchOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with link to the homepage */}
        <Link to="/" className="text-5xl font-bold">
          IBRAHIM's Bookstore
        </Link>
        <div className="flex items-center space-x-4 text-black">
          {/* Desktop search input, hidden on smaller screens */}
          {/* <input
            className="hidden md:block py-2 px-4 rounded-lg focus:outline-none bg-white text-black"
            type="text"
            placeholder="Search for books..."
            // value={searchOpen}
            onChange={(e) => setSearchOpen(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && searchBook()}
          /> */}
          {/* Hamburger menu button for mobile view */}
          <input
            className="  py-2 px-4 focus:outline-none bg-white rounded-lg ml-6"
            type="text"
            placeholder="Search for books..."
            value={searchOpen}
            onChange={(e) => setSearchOpen(e.target.value)} // Update searchOpen state
            onKeyUp={(e) => e.key === "Enter" && searchBook()} // Trigger search on Enter
          />

          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile search input (visible when the menu is open) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-2 border-t border-gray-600 pt-2`}
      >
        {/* <input
          className="py-2 px-4 focus:outline-none bg-transparent"
          type="text"
          placeholder="Search for books..."
          value={input}
          onChange={searchBook}
        /> */}
      </div>
    </nav>
    
  );
};

export default BookStoreNav;
