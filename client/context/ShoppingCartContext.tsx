import { ReactNode, createContext, useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart "

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
  name: string
  image: string
  price: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  addToCart: (id: number, quantity: number, name: string, image: string, price: number) => void
  removeFromCart: (id: number) => void
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  cartItems: CartItem[]
  cartQuantity: number
  openCart: () => void
  closeCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  } 

  const addToCart = (id: number, quantity: number, name: string, image: string, price: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity, name, image, price }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return  { ...item, quantity: item.quantity + quantity, name, image, price }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  const increaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      return currItems.map(item => {
        if (item.id === id) {
          return  { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return  { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider 
      value={{ 
        getItemQuantity, 
        addToCart, 
        decreaseItemQuantity, 
        increaseItemQuantity,
        removeFromCart, 
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      {isOpen && <ShoppingCart />}
    </ShoppingCartContext.Provider>
  )
}