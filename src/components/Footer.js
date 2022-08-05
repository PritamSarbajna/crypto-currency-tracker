import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#180931] h-20 text-center p-4'>
        <h2 className='text-[#ccc]'>Created by <span className='font-semibold text-[#fff]'>Pritam Sarbajna</span> | © 2022</h2>

        <div className="flex p-2 justify-center items-center gap-10 text-xl">
            
            <a className='animate' href='https://github.com/PritamSarbajna' target='_blank' rel='noreferrer'>
                <FaGithub className='text-[#fff] hover:text-[#6f43b6]' />
            </a>
            <a className='animate' href='https://www.linkedin.com/in/pritam-sarbajna-74945821b/' target='_blank' rel='noreferrer'>
                <FaLinkedin className='text-[#fff] hover:text-[#6f43b6]' />
            </a>
        </div>
    </div>
  )
}

export default Footer