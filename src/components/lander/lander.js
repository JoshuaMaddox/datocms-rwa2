import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Hero section */}
      <div className="flex justify-between items-center py-4 px-8 bg-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold ml-2">Company Name</h1>
        </div>
        {/* Menu */}
        <div className="hidden md:flex items-center">
          <Link to="/menu-option" className="px-4 py-2 font-semibold text-gray-700">Menu Option</Link>
        </div>
        {/* Hamburger menu */}
        <div className="md:hidden flex items-center">
          <button className="px-3 py-2 rounded-lg text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:py-8 px-4">
        {/* Email capture and submit */}
        <div className="w-full md:w-1/2 px-4 md:px-8 py-4 md:py-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get started with us today</h2>
          <p className="text-gray-600 mb-8">Sign up to receive updates and special offers</p>
          <form className="flex flex-col md:flex-row items-center">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg shadow-sm w-full md:w-3/4 mb-4 md:mb-0" />
            <button type="submit" className="px-4 py-2 rounded-lg shadow-sm bg-orange-500 text-white font-bold w-full md:w-1/4">Sign up</button>
          </form>
        </div>
       {/* Image and animation */}
<div className="w-full md:w-1/2 px-4 md:px-8 py-4 md:py-0">
  <img src="/placeholder.svg" alt="Placeholder" className="w-full" />
  <div className="wavy-animation absolute bottom-0 right-0">
    <svg className="h-16 w-16 fill-current text-gray-300" viewBox="0 0 100 20">
      <path d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
    </svg>
  </div>
</div>
</div>
</div>
)
