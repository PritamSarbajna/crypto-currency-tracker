import React from 'react'
import { RiCoinsFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
        <div className='flex justify-center items-center bg-[#16213E] p-3 w-full fixed z-10 bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
            <RiCoinsFill className='text-5xl text-[#E94560] animate-spin' />
            <h1 className='text-[#fff] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Crypto Tracker</h1>
        </div>
    </Link>
  )
}

export default Navbar