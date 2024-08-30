import React from 'react'
import './RelProducts.css'
import data from '../Assets/data'
import Items from '../Items/Items'

const RelProducts = () => {
  return (
    <div className='relproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relproducts-item">
            {data.map((item, i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} discounted_price={item.discounted_price} original_price={item.original_price}/>
            })}

        </div>

    </div>
  )
}

export default RelProducts