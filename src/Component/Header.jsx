import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import '../index.css';
import { IoMdCall } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if About link should be active
  const isAboutActive = location.pathname === '/' && location.hash === '#about';

  // Class helper
  const getLinkClass = (active) =>
    active ? 'text-[#3D3D3D] text-xl font-bold' : 'text-[#A6A6A6] text-base font-bold';

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-[#121212] text-white relative z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <li className="text-[#A6A6A6] text-xl sm:text-2xl font-bold list-none font-fira leading-tight">
          <NavLink to="/">Harsh <br className="hidden sm:block" /> Prasad</NavLink>
        </li>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">

          {/* Home */}
          <li className="font-semibold list-none">
            <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>Home</NavLink>
          </li>

          {/* About */}
          <li className="font-semibold list-none">
            <NavLink to="/#about" className={getLinkClass(isAboutActive)}>About</NavLink>
          </li>

          {/* Other Routes */}
          {['projects', 'getInTouch'].map((route) => (
            <li key={route} className="font-semibold list-none">
              <NavLink
                to={`/${route}`}
                className={({ isActive }) => getLinkClass(isActive)}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </NavLink>
            </li>
          ))}
        </nav>

        {/* Contact - Hide on very small screens */}
        <div className="hidden sm:flex items-center gap-2 text-[#A6A6A6] text-sm">
          <IoMdCall />
          +91 9199783011
        </div>

        {/* Hamburger Icon - Mobile only */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {['projects', 'about', 'getInTouch'].map((route) => {
            const to = route === 'about' ? '/#about' : `/${route}`;
            const isActive = route === 'about' ? isAboutActive : location.pathname === `/${route}`;

            return (
              <li key={route} className="list-none border-b border-gray-700 pb-2">
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={getLinkClass(isActive)}
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </NavLink>
              </li>
            );
          })}

          {/* Contact in mobile menu */}
          <div className="flex items-center gap-2 text-[#A6A6A6] text-sm pt-2">
            <IoMdCall />
            +91 9199783011
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
