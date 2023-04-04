import React from 'react'
// import './App.css'

function Coin({name, icon, price, symbol}) {
  return (
    <div className='coin'>
          <h1>Name: {name} </h1>
          <img src={icon} alt="" />
          <h3>Price (₹) : {price} </h3>
          <h2>Symbol: {symbol} </h2>
    </div>
  )
}

export default Coin
