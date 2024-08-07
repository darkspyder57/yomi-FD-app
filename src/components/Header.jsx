"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import Link from "next/link"
export default function Header() {
    useEffect(() => {
        const menuIcon = document.querySelector('.menu-icon');
        const linksContainer = document.querySelector('.links-container');

        const toggleMenu = () => {
            linksContainer.classList.toggle('active');
        };

        menuIcon.addEventListener('click', toggleMenu);

        // Cleanup function to remove the event listener
        return () => {
            menuIcon.removeEventListener('click', toggleMenu);
        };
    }, []);
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
                <div className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </header>

    )
}