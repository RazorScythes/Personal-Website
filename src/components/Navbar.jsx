import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome, faUser, faFolder, faGamepad, faStore, faBoxArchive, faPhone, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'

export const navLinks = [
  {
    id: "account",
    title: "Account",
    icon: faUser,
  },
  {
    id: "settings",
    title: "Settings",
    icon: faGear
  },
  {
    id: "logout",
    title: "Logout",
    icon: faRightFromBracket
  }
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-gray-800 p-6 z-10">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="h-8 w-8 rounded-full mr-2" src={Logo} alt="Profile" />
            <span className="font-semibold text-xl tracking-tight">RazorScythe</span>
        </div>
      </Link>
      <div className="block lg:hidden flex">
        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white" onClick={() => {
          setIsActive(!isActive)
          setToggle(false)
        }}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 110-6h20a3 3 0 110 6H0zm0 7a3 3 0 110-6h20a3 3 0 110 6H0zm0 7a3 3 0 110-6h20a3 3 0 110 6H0z"/></svg>
        </button>
        <img className="h-8 w-8 rounded-full ml-4 cursor-pointer object-cover" src={Avatar} alt="Profile" onClick={() => {
          setToggle(!toggle)
          setIsActive(false)
        }} />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-sm font-poppins`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-white hover:text-blue-200
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <FontAwesomeIcon icon={nav.icon} className="mr-2" />
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`font-poppins w-full block flex-grow lg:flex lg:items-center lg:ml-60 m-auto lg:w-auto ${isActive ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faFolder} className="mr-2" />
            Portfolio
          </Link>
          <Link to="/notifications" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
            Games
          </Link>
          <Link to="/notifications" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faStore} className="mr-2" />
            Store
          </Link>
          <Link to="/notifications" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faBoxArchive} className="mr-2" />
            Archive
          </Link>
          <Link to="/messages" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" onClick={() => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Contact Us
          </Link>
        </div>
        <div className="relative lg:mt-0 mt-4 font-poppins">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          </span>
          <input className="block w-full bg-gray-200 text-sm text-gray-700 rounded-full py-2 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:text-gray-900" type="text" placeholder="Search" />
        </div>
        <div className="hidden lg:block flex">
          <img className="h-10 w-10 rounded-full ml-4 cursor-pointer object-cover" src={Avatar} alt="Profile" onClick={() => {
            setToggle(!toggle)
            setIsActive(false)
          }} />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-800 absolute top-[90px] right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar text-sm font-poppins`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-white hover:text-blue-200
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <FontAwesomeIcon icon={nav.icon} className="mr-2" />
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
)}

export default Navbar;
