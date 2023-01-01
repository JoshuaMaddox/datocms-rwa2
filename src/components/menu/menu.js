import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 ml-4">RWAs</h1>
          </div>
          <button
            className="hidden md:block text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <button
            className="block md:hidden text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <ul className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <li className="mb-2 md:mb-0">
              <a
                className="text-gray-900 hover:text-gray-700 focus:outline-none"
                href="#"
              >
                Menu
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center md:justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Title</h2>
            <p className="text-gray-700 mb-4">Subtitle</p>
            <form className="flex items-center">
              <input
                className="border rounded-md px-4 py-2 mr-4 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
              <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
