import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import DarkMode from './DarkMode';
const Navbar = () => {
  return (
    <>
      <div
      className='flex flex-row justify-between px-14 py-3 dark:bg-gray-900'
      >
        <div>
        <Link
        to="/"
        >
        <img 
        className='w-9'
        src={logo} alt="Logo" />
        </Link>
        </div>
        <div>
            <ul className='flex flex-row gap-4'>
              <Link to="/">Home</Link>
              <Link to="projects">Project</Link>
              <Link to="services">Services</Link>
              <Link to="about">About</Link>
              <Link to="blog">Blog</Link>
            </ul>
        </div>
        <div 
        className='flex flex-row'
        >
            <Link to="contact">Hire Me</Link>
            <div>
                <DarkMode />
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
