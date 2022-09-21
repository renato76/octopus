import React from 'react'
import { ProductFields } from '../interfaces'

const ProductCard: React.FC<ProductFields> = ({ allProducts }) => {
  console.log('allProducts >>>', allProducts)
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard