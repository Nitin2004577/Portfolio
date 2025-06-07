import { useState } from "react";
import logo from "../assets/images/NKS.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    // Navigate to a specific URL when the logo is clicked
    window.location.href = "https://your-website-url.com";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
        <div className="flex items-center">
          <button onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="mx-2 w-10 h-8 w-auto" />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <div
          className={`md:flex items-center justify-center gap-4 text-2xl ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a
            href="https://www.linkedin.com/in/nitin-kumar-shah-689229326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
