import React from 'react'
import './HotDeals.css'
import product_data from '../Assets/data'
import Items from '../Items/Items'

const HotDeals = () => {
  return (
    <div className='hot-deals'>
        <h1>HOT DEALS!</h1>
        <hr />
        <div className="deal-items">
            {product_data.map((item, i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} discounted_price={item.discounted_price} original_price={item.original_price}   />
            })}
        </div>

    </div>
  )
}

export default HotDeals