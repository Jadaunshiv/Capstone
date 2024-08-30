import React, { useContext } from 'react'
import './ProductDetails.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDetails = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdetails'>
        <div className="productdetails-left">
            <div className="productdetails-img">
                <img className='productdetails-main-img' src={product.image} alt="" />
            </div>
            
        </div>
        <div className="productdetails-right">
            <h1>{product.name}</h1>
            <div className="productdetails-right-stars">
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_dull_icon} alt="star-dull-icon" />  
                <p>(547)</p>              
            </div>
            <div className="productdetails-right-prices">
                <div className="productdetails-right-price-original">
                    ${product.original_price}
                </div>
                <div className="productdetails-right-price-discounted">
                    ${product.discounted_price}
                </div>
            </div>
            <div className="productdetails-right-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci fugit reiciendis dolorem blanditiis quis nobis officia voluptatum temporibus nisi! 
                </div>
                <button onClick={() => {addToCart(product.id)}}>Add to Cart!</button>
        </div>
    </div>
  )
}

export default ProductDetails