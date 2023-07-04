import { useShoppingCart } from '../context/ShoppingCartContext'
import { AiOutlineClose } from "react-icons/ai"
import ShoppingCartCard from './ShoppingCartCard'

const ShoppingCart  = () => {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <div className="absolute top-0 left-0 h-[1400px] z-30 w-full bg-[#0f0d23] px-4 py-2">
      <div>
        <div className="text-3xl font-bold mb-6 mt-2 cursor-pointer" onClick={closeCart}>
          <AiOutlineClose />
        </div>
        <div className="text-white">
          {!cartItems.length ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index}>
                <ShoppingCartCard item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart 