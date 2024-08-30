import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Stay Connected with us...</h1>
        <p>Subscribe to our Newsletter and get best deals and offers.</p>
        <div>
            <input type='text' placeholder='Enter your Email' />
            <button>Subscribe!</button>
        </div>        
    </div>
  )
}

export default NewsLetter