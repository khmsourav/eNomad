import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    path: '/',
    name: "Home",
  },
  {
    path: '/planing',
    name: "Planing",
  },
  {
    path: '/stories',
    name: "Stories",
  },
  {
    path: '/explore',
    name: "Destination",
  },
  {
    path: '/travels',
    name: "Achievement",
  },
  {
    path: '/blogs',
    name: "Blog",
  },
  {
    path: '/contact',
    name: "Contact",
  },
  
]

const Header = () => {
  const currentRoute = useLocation();
  return (
    <header className="header section-wrapper">
      <div className="header-logo-area">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="header-item-area">
        <ul className="header-items">
          {
            navLinks.map((navItem) =>
            <li className={currentRoute?.pathname === navItem?.path ? 'active' : ''} key={Math.random()} >
              <Link to={navItem?.path}>{navItem?.name}</Link> 
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
