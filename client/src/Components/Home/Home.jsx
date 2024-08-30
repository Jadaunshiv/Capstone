import React from 'react'
import './Home.css'
import deal_image from '../Assets/deal.jpg'
import arrow_icon from '../Assets/arrow.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-left">
            <h2>Your Only Budget Store.</h2>
            <p>SALE!</p>
            <p>OFFERS!</p>
            <p>AND MUCH MORE...</p>
            <div className="offer-btn">
                <div>Check Deals & Offers</div>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
        <div className="home-right">
            <img src={deal_image} alt='deals' />
        </div>
    </div>
  )
}

export default Home