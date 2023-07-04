import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../graphql/queries'
import ProductCard from '../components/ProductCard'
import { CartItemsTypes } from '../interfaces'

export default function Product() {
  const { data, error, loading } = useQuery<CartItemsTypes>(PRODUCT_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <>
      <div>
        <ProductCard allProducts={data.allProducts} />
      </div>
    </>
  )
}
