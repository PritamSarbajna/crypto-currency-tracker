import React from 'react'
import Coinitem from './Coinitem'
import './global.css'
import { Link } from 'react-router-dom'
import Coin from './Routes/Coin'

const Coins = (props) => {
  return (
    <div className='max-w-[1140px] m-auto pt-[5rem]'>
        <div>
            <div className='flex justify-between items-center cursor-pointer bg-[#061a34a2] shadow-[#18191b] text-[#fff] shadow-lg rounded-lg m-4 p-5 font-bold text-xl hover:text-[#7681fd] hover:font-bold ease-in-out duration-300'>
                <p className=''>Sl.</p>
                <p className='ml-[-5rem]'>Coin</p>
                <p className=' '>Price</p>
                <p className=''>24h</p>
                <p className='hidden md:inline'>Volume</p>
                <p className='hidden md:inline mr-[4rem]'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                        <Coinitem coins={coins} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins