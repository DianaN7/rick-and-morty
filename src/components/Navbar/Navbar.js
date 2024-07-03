import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="navbar mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Вселенная <span className="text-emerald-600">Рик и Морти</span>
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className=" mr-4 text-gray-900 text-xl ">
                  <a href="/" className="text-emerald-600 no-underline">
                    Персонажи
                  </a>
                </li>
                <li className=" mr-4 text-gray-900 text-xl ">
                  <a href="/episodes" className="text-emerald-600 no-underline">
                    Эпизоды
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <NavLink
              to="/"
              className="no-underline mr-4  text-gray-900 text-xl "
            >
              Персонажи
            </NavLink>
            <NavLink
              to="/episodes"
              className="no-underline  text-gray-900 text-xl"
            >
              Эпизоды
            </NavLink>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
};

export default Navbar;
