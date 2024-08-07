"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const linksContainer = document.querySelector('.links-container');

    if (menuOpen) {
      linksContainer.classList.add('active');
    } else {
      linksContainer.classList.remove('active');
    }

  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <img src="assets/img/yomi-logo.png" className="logo" alt="yomi-logo" />
        </Link>
        <ul className="links-container">
          <li className="link-items"><a href="#order" className="links">Order</a></li>
          <li className="link-items"><a href="#" className="links">Add-Restaurant</a></li>
          <li className="link-items"><a href="#" className="links">Login</a></li>
          <li className="link-items"><a href="#" className="links">SignUp</a></li>
        </ul>
        <div className="nav-extras">
          <div className="search">
            <input type="text" className="search-box" placeholder="Search Restaurants, Cuisine..... " />
            <button className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <a href="#" className="cart"><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
