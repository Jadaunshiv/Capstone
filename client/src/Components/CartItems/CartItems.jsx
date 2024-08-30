import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const {totalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitems-format cartitems-main">
                    <img className='cartitems-prod-ico' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.discounted_price}</p>
                    <button className='cartitems-qty'>{cartItems[e.id]}</button>
                    <p>${e.discounted_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-ico' onClick={() => {removeFromCart(e.id)}} src={remove_icon}  alt="remove-icon" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-bottom">
            <div className="cartitems-total">
                <h1>Final Summary</h1>
                <div>
                    <div className="cartitems-item-total">
                        <p>Total</p>
                        <p>${totalCartAmount()}</p>
                    </div>
                    <hr />
                </div>
                <button>PROCEED TO CHECKOUT!</button>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems