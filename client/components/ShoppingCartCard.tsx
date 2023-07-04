import { useShoppingCart, ShoppingCartContext } from '../context/ShoppingCartContext'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ShoppingCartCard = ({ item }) => {
  const { increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
  console.log('item', item)
  return (
   <>
      <div className="flex-col py-4 h-32 rounded-md bg-[#6810cd]">
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
   </>
  )
}

export default ShoppingCartCard