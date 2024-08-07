"use client"

import Link from "next/link"
export default function Footer() {
    return (
        <footer id="footer" className="bg-white-800 text-black py-6">
            <Link href="/">
                <img src='assets/img/yomi-logo.png' width={300} className="logo" alt="yomi-logo" />
            </Link>
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="/about" className="hover:text-red-400">About Us</a>
                    <a href="/contact" className="hover:text-orange-400">Contact</a>
                    <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
                    <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}