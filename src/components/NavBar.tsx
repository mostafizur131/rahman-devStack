import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-[#475569] md:hidden"
          >
            ☰
          </button>

          <a href="/" className="flex items-center">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="h-8"
            />
          </a>

          <ul className="hidden items-center space-x-6 md:flex">
            <li>
              <a
                href="/"
                className="text-sm font-semibold text-[#DB2777] transition-colors duration-300 hover:text-[#DB2777]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/technologies"
                className="text-sm font-semibold text-[#475569] transition-colors duration-300 hover:text-[#DB2777]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="/projects"
                className="text-sm font-semibold text-[#475569] transition-colors duration-300 hover:text-[#DB2777]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-sm font-semibold text-[#475569] transition-colors duration-300 hover:text-[#DB2777]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-sm font-semibold text-[#475569] transition-colors duration-300 hover:text-[#DB2777]"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-2">
            <button className="rounded-full px-3 py-2 text-sm font-semibold text-[#475569] hover:text-[#DB2777]">
              Sign In
            </button>

            <button className="rounded-full bg-[#DB2777] px-4 py-2 text-sm font-semibold text-white hover:bg-[#BE185D]">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="border-t border-gray-100 py-4 md:hidden">
            <li>
              <a
                href="/"
                className="block py-2 text-sm font-semibold text-[#DB2777]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/technologies"
                className="block py-2 text-sm font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="/projects"
                className="block py-2 text-sm font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="block py-2 text-sm font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="block py-2 text-sm font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
