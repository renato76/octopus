import React, {useState} from 'react'
import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../graphql/queries'
import { ProductFields } from '../interfaces'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { data, error, loading } = useQuery<ProductFields>(PRODUCT_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <>
      <ProductCard allProducts={data.allProducts} />
    </>
  )
}
