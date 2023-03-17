import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TextWithLines } from '../components/index'
const Footer = () => {
  return (
        <footer className="bg-gray-800 text-white px-8 font-poppins">
            <div className="container mx-auto py-12 flex flex-wrap justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-8">
                    <h3 className="text-lg font-medium mb-8"><TextWithLines text="About us"/></h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        at tellus nulla. Pellentesque eget libero semper, commodo mauris
                        vel, vehicula est.
                    </p>
                    <div className="flex">
                        <a
                        href="#"
                        className="text-white mr-4 hover:text-gray-400 transition duration-300"
                        >
                        <FaFacebook size={24} />
                        </a>
                        <a
                        href="#"
                        className="text-white mr-4 hover:text-gray-400 transition duration-300"
                        >
                        <FaTwitter size={24} />
                        </a>
                        <a
                        href="#"
                        className="text-white hover:text-gray-400 transition duration-300"
                        >
                        <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-8 sm:pl-24 pl-0">
                    <h3 className="text-2xl md:text-2xl font-bold leading-relaxed uppercase mb-8">Navigation</h3>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a
                                href="#"
                                className="text-white hover:text-gray-400 transition duration-300"
                                >
                            Home
                            </a>
                        </li>
                        <li className="mb-2">
                        <a
                            href="#"
                            className="text-white hover:text-gray-400 transition duration-300"
                            >
                        About
                        </a>
                        </li>
                        <li className="mb-2">
                        <a
                            href="#"
                            className="text-white hover:text-gray-400 transition duration-300"
                            >
                        Services
                        </a>
                        </li>
                        <li className="mb-2">
                        <a
                            href="#"
                            className="text-white hover:text-gray-400 transition duration-300"
                            >
                        Contact
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-8">
                    <h3 className="text-2xl md:text-2xl font-bold leading-relaxed uppercase mb-8">Contact Us</h3>
                    <form className="text-sm">
                        <div className="flex mb-4">
                        <label htmlFor="name" className="sr-only">
                        Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="border border-gray-400 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="flex mb-4">
                        <label htmlFor="email" className="sr-only">
                        Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="border border-gray-400 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="flex mb-4">
                        <label htmlFor="message" className="sr-only">
                        Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                            className="border border-gray-400 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ></textarea>
                        </div>
                        <button
                        type="submit"
                        className="bg-yellow-500 py-2 px-4 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                        >
                        Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-800 py-4 border-t border-solid border-gray-600">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2023 My Awesome Website. All rights reserved.
                    </p>
                    <a href="#" className="text-yellow-500 hover:text-yellow-600 transition duration-300">
                        <AiOutlineMail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
                
export default Footer;
