import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const Category = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='category'>
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-index">
        <p>
          <span>Showing 1-10</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} discounted_price={item.discounted_price} original_price={item.original_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">
        Show More
      </div>

    </div>
  )
}

export default Category