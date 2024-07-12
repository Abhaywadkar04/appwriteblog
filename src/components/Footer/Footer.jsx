import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import useTheme from '../../contexts/theme';

function Footer() {
  const { theme } = useTheme();
  return (
    <section className={`relative overflow-hidden py-10 bg-gray-800`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
              <p className={`text-white`}>
  &copy; Copyright 2024. All Rights Reserved by Echoes.
</p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul className={`text-white`}>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul className={`text-white`}>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul className={`text-white`}>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition duration-300"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-11/12 md:flex md:justify-end md:items-end md:mb-0">
  <div className="h-full flex flex-col justify-end items-end" style={{ marginLeft: 'auto' }}>
    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500 hidden md:block">
      Social Media
    </h3>
    <ul className="text-white flex space-x-4 mb-0">
      <li className="mb-4 md:mb-0">
        <a
          className="text-base font-medium hover:text-gray-400 transition duration-300"
          href="https://www.instagram.com/abhhay____/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li className="mb-4 md:mb-0">
        <a
          className="text-base font-medium hover:text-gray-400 transition duration-300"
          href="https://www.linkedin.com/in/abhay-wadkar-078b25283/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="mb-0">
        <a
          className="text-base font-medium hover:text-gray-400 transition duration-300"
          href="https://twitter.com/echoesapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Footer;

