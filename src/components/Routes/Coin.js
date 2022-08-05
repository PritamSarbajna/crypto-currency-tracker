import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

const Coin = () => {

  const [coin, setCoin] = useState({})
  const params = useParams()
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className='flex justify-center items-center'>
      <div className="pt-20 p-4 text-[1rem]">

        <div className='max-w-[840px] bg-[#3D2E4F] m-4 p-3 flex flex-col shadow-[#18191b] shadow-lg rounded-lg'>
          <div className='m-2'>
            <span className='border-2 border-solid border-[#6900ff] shadow-[#6900ff] bg-[#6900ff] rounded-[4px] p-1'>Rank # {coin.market_cap_rank}</span>
          </div>

          <div className='overflow-hidden m-4 rounded-lg'>
            <div className='flex justify-center cursor-pointer bg-[#382254] rounded-lg hover:bg-[#4c2e70] ease-in-out duration-700 hover:scale-125'>
              <div className='flex items-center m-4 hover:scale-105'>
                {coin.image ? <img src={coin.image.small} alt="" /> : null}
                <p className='p-4 text-lg tracking-wide'>{coin.name}</p>
              </div>

              <div className='flex flex-col sm:flex-row items-center justify-center ml-[4rem] gap-2'>
                {coin.symbol ? <p>{coin.symbol.toUpperCase()}/INR</p> : null}
                {coin.market_data?.current_price ? <h1 className='font-bold text-2xl'>₹{coin.market_data.current_price.inr.toLocaleString()}</h1> : null}
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[840px] bg-[#3D2E4F] m-4 p-3 flex flex-col shadow-[#18191b] shadow-lg rounded-lg'>
          <table className='m-2'>
            <thead>
              <tr className='p-2 text-center'>
                <th className='p-2 text-center bg-[#4c2e70] rounded-sm'>1h</th>
                <th className='p-2 text-center bg-[#4c2e70] rounded-sm'>24h</th>
                <th className='p-2 text-center bg-[#4c2e70] rounded-sm'>7d</th>
                <th className='p-2 text-center bg-[#4c2e70] rounded-sm'>30d</th>
                <th className='p-2 text-center bg-[#4c2e70] rounded-sm'>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(1)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='max-w-[840px] bg-[#3D2E4F] m-4 p-3 flex flex-col shadow-[#18191b] shadow-lg text-center rounded-lg'>
          <div className='grid grid-rows-1 text-[#ddd]  sm:grid-cols-2 '>
            <div>
              <div className='p-2'>
              <h4 className='text-lg font-semibold text-[#fff]'>24 Hour Low</h4>
              {coin.market_data?.low_24h ? <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p> : null}
              </div>

              <div className='p-2'>
              <h4 className='text-lg font-semibold text-[#fff]'>24 Hour High</h4>
              {coin.market_data?.high_24h ? <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p> : null}
              </div>
            </div>

            <div>
              <div className='p-2'>
                <h4 className='text-lg font-semibold text-[#fff]'>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p> : null}
              </div>

              <div className='p-2'>
                <h4 className='text-lg font-semibold text-[#fff]'>Circulating Supply</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[840px] bg-[#3D2E4F] m-4 p-3 flex flex-col shadow-[#18191b] shadow-lg rounded-lg'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold line'>About</h3>
            <p className='leading-7 p-2 text-[#eee]' dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
              }}>
                        
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Coin