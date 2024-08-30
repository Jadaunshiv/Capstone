import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/arrow_2.png'

const Breadcrumb = (props) => {
  const {product} = props
  return (
    <div className='breadcrumb'>
      HOME <img src={arrow_icon} alt="arrow-icon" />
      SHOP <img src={arrow_icon} alt="arrow-icon" />
      {product.category} <img src={arrow_icon} alt="arrow-icon" />
      {product.name} <img src={arrow_icon} alt="arrow-icon" />
    </div>
  )
}

export default Breadcrumb