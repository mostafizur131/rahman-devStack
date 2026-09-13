import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo-text.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= DESKTOP / MOBILE HEADER ================= */}
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-[#475569] transition-colors hover:bg-gray-50 hover:text-[#DB2777] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>

          {/* Brand */}
          <a
            href="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
          >
            <img
              src={logo}
              alt="Dev Stack"
              className="h-7 w-auto object-contain sm:h-8 md:h-9"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-6 md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
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

          {/* Authentication Buttons */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="px-2.5 py-2 text-xs font-semibold text-[#475569] transition-colors hover:text-[#DB2777] sm:px-3 sm:text-sm"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#DB2777] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#BE185D] sm:rounded-full sm:px-4 sm:text-sm"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-3 md:hidden">
            <ul className="space-y-1">
              <li>
                <a
                  href="/"
                  onClick={closeMenu}
                  className="block rounded-lg bg-pink-50 px-3 py-2.5 text-sm font-semibold text-[#DB2777]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/technologies"
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#475569] transition-colors hover:bg-gray-50 hover:text-[#DB2777]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#475569] transition-colors hover:bg-gray-50 hover:text-[#DB2777]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#475569] transition-colors hover:bg-gray-50 hover:text-[#DB2777]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#475569] transition-colors hover:bg-gray-50 hover:text-[#DB2777]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
