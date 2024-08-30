import React from 'react'
import './Collections.css'
import offer_collections from '../Assets/offer_collections'
import Items from '../Items/Items'

const Collections = () => {
  return (
    <div className='offer-collections'>
        <h1>LATEST OFFERS</h1>
        <hr />
        <div className="collections">
            {offer_collections.map((item, i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} discounted_price={item.discounted_price} original_price={item.original_price}/>
            })}
        </div>

    </div>
  )
}

export default Collections