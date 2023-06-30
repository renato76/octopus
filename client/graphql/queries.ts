import { gql } from '@apollo/client'

export const PRODUCT_QUERY = gql`
  query ProductQuery {
    allProducts {
      fields
    }
  }
`
