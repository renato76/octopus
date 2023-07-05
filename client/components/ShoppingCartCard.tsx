import { useShoppingCart, ShoppingCartContext } from '../context/ShoppingCartContext'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ShoppingCartCard = ({ item }) => {
  const { increaseItemQuantity, decreaseItemQuantity, getItemQuantity, cartQuantity, total } = useShoppingCart()
  return (
  <div>
    <div className="flex justify-center mb-12">
      <h1 className="text-4xl">Basket</h1>
    </div>
    <div className="w-full my-0 mx-auto md:max-w-2xl">
      <div className="flex flex-col justify-center h-40 py-4 rounded-md bg-[#6810cd]">
        <div className="flex">
          <div className="mx-2">
            <Image 
              src={item.image}
              width={100} 
              height={100} 
              className="cursor-pointer border rounded-xl" 
              layout="intrinsic"
            />
          </div>
          <div className="text-white text-sm flex flex-col flex-1 mx-2">
            <div>
              <p>{item.name}</p>
            </div>
            <div>
              <p>£{(item.price / 100).toFixed(2)}</p>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xs">
                  Qty
                </div>
                <div className="flex">
                  <button
                    className="cursor-pointer mx-2 border rounded-lg border-transparent p-2 bg-sohoLights" 
                    onClick={() => decreaseItemQuantity(item.id)}
                    >
                    <FaMinus/>
                  </button>
                  <div title="Current quantity" className="w-4 flex flex-col justify-center items-center text-xl">
                    {item.quantity}
                  </div>
                  <button 
                    title="+" 
                    className="plus cursor-pointer mx-2 border rounded-lg border-transparent p-2 bg-sohoLights" 
                    onClick={() => 
                      increaseItemQuantity(item.id)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 flex flex-col">
        <div className="w-full border border-white rounded-md p-4 flex flex-col">
          <div className="flex justify-center">
            <h2 className="text-2xl">Basket Summary</h2>
          </div>
          <div className="mt-6 space-y-2">
            <div>
              Items: {getItemQuantity(item.id)}
            </div>
            <div>
              Subtotal: £{cartQuantity}
            </div>
            <div>
              Delivery: £4.99
            </div>
            <div>
              Total: £{total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>                
    </div>
  </div>
  )
}

export default ShoppingCartCard