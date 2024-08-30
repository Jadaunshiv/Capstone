import React from 'react'
import offer_image from '../Assets/offer_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>*ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now!</button>
        </div>
        <div className="offers-right">
            <img src={offer_image} alt='offer-image' />
        </div>
    </div>
  )
}

export default Offers