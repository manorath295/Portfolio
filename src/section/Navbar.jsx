import React, { useState } from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <ul className='nav-ul'>
      <li className='nav-li'> 
        <a className='nav-link' href='#home'>Home</a>
      </li>
      
      <li className='nav-li'> 
        <a className='nav-link' href='#about'>About</a>
      </li>
      
      <li className='nav-li'> 
        <Link className='nav-link' to='/contact'>Contact</Link>
      </li>
    </ul>
  )
}

const Social = () => {
  return (
    <div className='flex items-center gap-3'>
      
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40  p-4'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Manorath
          </a>
          
          {/* Desktop Navigation with Social Icons */}
          <div className='hidden sm:flex items-center gap-6'>
            <Navigation/>
            <Social/>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='flex sm:hidden cursor-pointer text-neutral-400 hover:text-white focus:outline-none'
          >
            <img 
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}  
              className="w-6 h-6"
              alt="menu"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
            {/* Social Icons in Mobile Menu */}
            <div className='flex justify-center mt-4'>
             
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar