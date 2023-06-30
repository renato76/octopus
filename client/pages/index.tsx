import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../graphql/queries'
import { CartItemsTypes } from '../interfaces'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { data, error, loading } = useQuery<CartItemsTypes>(PRODUCT_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <>
      <div>
        {data.allProducts.map(item => (
          <Link
            key={item.fields.id}
            href={`/products/${item.fields.id}`}
            className=""
          >
            <div>
              {/* replace this with a new component that displays basic details of each product */}
              <ProductCard allProducts={data.allProducts}/>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
