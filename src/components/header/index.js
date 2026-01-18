import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-[#2E2A47] text-white px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/du1stzhac/image/upload/v1768699191/111_zb0xnt.jpg"
            width={80}
          />
        </Link>

        <div
          className={`flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 ${
            isMobile ? "top-[72px]" : "top-[-500px]"
          } transition-all duration-300 z-10 md:z-aduto font-semibold`}
        >
          <Link
            to="/"
            className="hover:text-yellow-400 md:py-0 py-2 px-4"
            onClick={() => setIsMobile(false)}
          >
            Home
          </Link>
          <Link
            to="/product"
            className="hover:text-yellow-400 md:py-0 py-2 px-4"
            onClick={() => setIsMobile(false)}
          >
            Our Product
          </Link>
          <Link
            to="/about-us"
            className="hover:text-yellow-400 md:py-0 py-2 px-4"
            onClick={() => setIsMobile(false)}
          >
            About Us
          </Link>

          <Link
            to="/contact-us"
            className="hover:text-yellow-400 md:py-0 py-2 px-4"
            onClick={() => setIsMobile(false)}
          >
            Contact Us
          </Link>
        </div>
        <button
          className="block md:hidden text-2xl focus:outline-none mr-3"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
