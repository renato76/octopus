import React from 'react'
import { useShoppingCart, ShoppingCartContext } from '../context/ShoppingCartContext'
import { AiOutlineClose } from "react-icons/ai"

const ShoppingCart  = () => {
  const {closeCart, cartItems} = useShoppingCart()
  return (
    <div className="absolute top-0 left-0 h-[1000px] z-30 w-full bg-[#0f0d23] px-4 py-2">
      <div>
      <div className="text-3xl font-bold mb-6 mt-2" onClick={closeCart}>
        <AiOutlineClose />
      </div>
      </div>
    </div>
  )
}

export default ShoppingCart 