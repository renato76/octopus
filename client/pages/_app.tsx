import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../graphql/apolloClient'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <ShoppingCartProvider>
     <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
     </ApolloProvider>
   </ShoppingCartProvider>
  )
}

export default MyApp;
