import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { ProductFields } from '../interfaces'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ProductCard: React.FC<ProductFields> = ({ allProducts }) => {
  const [cartQuantity, setCartQuantity] = useState(1)
  const { 
    id, 
    name, 
    power, 
    description, 
    price, 
    quantity,
    brand, 
    weight, 
    height, 
    width, 
    length, 
    model_code: modelCode, 
    colour, 
    img_url: imgUrl 
  } = allProducts[0].fields

  console.log('allProducts >>>', allProducts)

  const incrementButtonHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    setCartQuantity(cartQuantity + 1)
  }

  const decrementButtonHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1)
    }
  }

  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('clicked addtocart')
  }

  return (
      <>
        <div className="flex flex-col justify-center max-w-xs m-auto">
          <div className="flex  flex-col justify-center">
            <div>
              <Image 
                  src={imgUrl}
                  width={340} 
                  height={340} 
                  className="cursor-pointer border rounded-xl" 
                  layout="intrinsic"
                />
            </div>
            <div className="mt-4 mb-2">
              <h1 className="text-3xl">{name}</h1>
            </div>
            <div className="mb-4">
              <h2 className="text-sm text-purpleHaze">{power} // Packet of {quantity}</h2>
            </div>
            <div className="flex justify-between">
              <div className="mt-5 text-2xl">
                £{(price / 100).toFixed(2)}
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xs">
                  Qty
                </div>
                <div className="flex">
                  <a 
                    className={`${cartQuantity === 1 ? 'opacity-40 pointer-events-none': ''} cursor-pointer mx-2 border rounded-lg border-transparent p-2 bg-sohoLights`} 
                    onClick={decrementButtonHandler}>
                    <FaMinus/>
                  </a>
                  <div title="Current quantity" className="w-4 flex flex-col justify-center items-center text-xl">
                    {cartQuantity}
                  </div>
                  <div className="cursor-pointer mx-2 border rounded-lg border-transparent p-2 bg-sohoLights" onClick={incrementButtonHandler}>
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <button 
                className="bg-sohoLights cursor-pointer w-full text-hemocyanin py-4 border rounded-lg border-transparent"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="my-2 bg-purpleFunk">
          <div className="px-4 py-3">
            <h2 className="text-2xl mb-4">Description</h2>
            <p className="font-extralight text-sm leading-loose">
              {description}
            </p>
          </div>
        </div>
        <div>
          <div className="px-4 py-3">
            <h2 className="text-2xl mb-4">Specifications</h2>
            <table className="w-full">
              <tr className="h-8">
                <td>Brand</td>
                <td>{brand}</td>
              </tr>
              <tr className="h-10">
                <td>Item Weight</td>
                <td>{weight}</td>
              </tr>
              <tr className="h-10">
                <td>Dimensions</td>
                <td>{height} x {width} x {length}</td>
              </tr>
              <tr className="h-10">
                <td>Item Model number</td>
                <td>{modelCode}</td>
              </tr>
              <tr className="h-10">
                <td>Colour</td>
                <td>{colour}</td>
              </tr>
            </table>
          </div>
        </div>
      </>
  )
}

export default ProductCard