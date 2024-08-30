import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import Description from '../Components/Description/Description'
import RelProducts from '../Components/RelProducts/RelProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDetails product={product} />
      <Description />
      <RelProducts />
    </div>
  )
}

export default Product