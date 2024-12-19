import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>SportX</h1>
        <nav>
           <Link href="/">Home</Link>
           <Link href="About">About</Link>
           <Link href="Products">Products</Link>
           <Link href="Contact">Contact</Link>
           <FaCartShopping style={{ fontSize:'20px'}}/>    
        </nav>
        </header>
  )
}

export default Header

