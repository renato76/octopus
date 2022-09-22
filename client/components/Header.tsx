import React from 'react'
import Image from 'next/image'
import { FaShoppingBasket } from 'react-icons/fa'

const Header: React.FC = () => {
  console.log('header')
  return (
    <div className="flex justify-between py-2">
      <div className="">
        <Image 
          src="https://static.octopuscdn.com/logos/logo.svg"
          width={180} 
          height={80} 
          className="cursor-pointer" 
        />
      </div>
      <div className="flex items-center mb-3">
        <FaShoppingBasket size={30} />
      </div>
    </div>
  )
}

export default Header