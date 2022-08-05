import React from 'react'
import './global.css'

const Coinitem = (props) => {
  return (
    <div className='flex justify-between items-center bg-[#0F3460] shadow-[#18191b] opacity-80 shadow-lg m-4 p-5 text-lg rounded-lg cursor-pointer ease-in-out duration-[0.3s] hover:scale-[1.05] hover:border-[#ccc] hover:border-2 hover:bg-[#07356e] hover:opacity-100'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='flex items-center'>
            <img className='h-[40px] w-auto mr-2' src={props.coins.image} alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>

        <p>₹{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hidden md:inline'>₹{props.coins.total_volume.toLocaleString()}</p>
        <p className='hidden md:inline'>₹{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default Coinitem