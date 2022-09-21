import React from 'react'
import { ProductFields } from '../interfaces'

const ProductCard: React.FC<ProductFields> = ({ allProducts }) => {
  console.log('allProducts >>>', allProducts)
  return (
    <div className="flex justify-center">ProductCard</div>
  )
}

export default ProductCard