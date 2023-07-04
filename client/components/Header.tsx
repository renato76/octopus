import { FC } from 'react'
import Image from 'next/image'
import { FaShoppingBasket } from 'react-icons/fa'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Header: FC = () => {
  const {openCart} = useShoppingCart()
  return (
    <div className="flex flex-col justify-center max-w-xs m-auto">
      <div className="flex justify-between py-2">
        <div className="">
          <Image 
            src="https://static.octopuscdn.com/logos/logo.svg"
            width={180} 
            height={80} 
            className="cursor-pointer" 
          />
        </div>
        <div className="flex items-center mb-3" onClick={openCart}>
          <FaShoppingBasket size={30} />
        </div>
      </div>
    </div>
  )
}

export default Header