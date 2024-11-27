import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import DarkMode from './DarkMode';
import { useState } from 'react';

const menuLinks = [
  {
    id : 1,
    name: 'Home',
    path: '/',
  },
  {
    id : 2,
    name: 'Projects',
    path: '/projects',
  },
  {
    id : 3,
    name: 'Services',
    path: '/services',
  },
  {
    id : 4,
    name: 'About',
    path: '/about',
  },
  {
    id : 5,
    name: 'Blog',
    path: '/blog',
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 py-3 dark:bg-gray-900 dark:text-slate-200">
        <div>
          <Link to="/">
            <img className="w-9" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="sm:flex items-center hidden">
          <ul className="flex gap-6">
            {menuLinks.map((link)=>(
              <Link
                key={link.id}
                className="text-gray-800 hover:text-gray-950 transition-all hover:underline dark:text-gray-200 dark:hover:text-gray-50"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Right section with Hire Me button and DarkMode toggle */}
        <div className="flex items-center gap-4">
          <Link
            key="hire-me" 
            className="bg-gray-800 hover:bg-gray-900 text-gray-100 px-3 py-1 dark:bg-gray-200 dark:text-gray-800 rounded-md hidden sm:flex"
            to="/contact"
          >
            Hire Me
          </Link>
          <div 
          className='hidden sm:flex'
          >
            <DarkMode />
          </div>

          {/* Hamburger Icon for mobile */}
          <button
            className="sm:hidden text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'} dark:bg-gray-800 bg-gray-200 py-4 w-screen h-screen`}
      >
        <ul className="flex flex-col gap-4 items-center"> 
          {menuLinks.map((link)=>(
            <Link
            key={link.id} 
            className="text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-gray-50 transition-all"
            to={link.path}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
          ))}

          {/* DarkMode toggle button */}
          <div className="flex justify-center w-full py-2">
            <DarkMode />
          </div>

          {/* Hire Me button */}
          <Link
            key="mobile-hire-me"
            className="bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 px-3 py-1 rounded-md"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
