import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items'>
        <Link to={`/product/${props.id}`}><img onClick={window.scroll(0, 0)} src={props.image} alt=""/></Link>
        <p>{props.name}</p>
        <div className="items-price">
            <div className="discounted-price">
                ${props.discounted_price}
            </div>
            <div className="original-price">
                ${props.original_price}
            </div>
        </div>

    </div>
  )
}

export default Items
