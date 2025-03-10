import { useMemo } from "react"
import { useDessertStore } from "../store"

export const DessertCart = () => {



    const dessertCart =   useDessertStore(state => state.dessertCart)
    const cartPriceTotal = useMemo(() => dessertCart.reduce((acc, i) =>  acc + (i.price  * i.quantity), 0 ).toFixed(2) , [dessertCart])
    const dessertCartQuantity =  useMemo(() => dessertCart.reduce((acc, i) => acc + (i.quantity), 0), [dessertCart]) 

  return (
    <>
        <section className="lg:col-start-8 lg:col-end-13 xl:col-start-9 xl:col-end-13 bg-white rounded p-8 sticky top-12">
            <h2 className="text-m-Red font-bold text-3xl">Your Cart: {dessertCartQuantity}</h2>                
            
        {dessertCart.length > 0? (
            <>
                {
                    dessertCart.map((item) => (
                        <article className="border-b py-4 border-m-Rose100 flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="font-semibold">{item.name}</p>
                                <div className="flex gap-2">
                                    <p className="text-m-Red font-bold pr-4">{item.quantity}x</p>
                                    <p>@ ${item.price.toFixed(2)}</p>
                                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            <p className="border w-7 h-7 text-2xl flex justify-center items-center rounded-full text-center cursor-pointer hover:bg-m-Rose900 transition-all duration-150 hover:text-m-Rose100 hover:border-m-Rose900 m-0">
                                ×
                            </p>
                        </article>      
                    ))
                }

                {
                    dessertCartQuantity !== 0 ? (
                        <div className="mb-4">
                            <div className="flex justify-between py-6 items-center">
                                <p>Order Total</p>
                                <p className="font-bold text-2xl">${cartPriceTotal}</p>
                            </div>

                            <div className="flex justify-center gap-2 bg-m-Rose100 py-4 rounded">
                                <img src="/assets/images/icon-carbon-neutral.svg" alt="arbol" />
                                <p>This is a <strong>carbon-neutral</strong> delivery</p>
                            </div>
                        </div>

                    ) : (
                        null
                    )
                }

                <button className="bg-m-Red transition-all duration-150 block w-full text-m-Rose50 py-4 rounded-4xl font-semibold cursor-pointer hover:bg-m-Red-hover">
                    Confirm Order
                </button>
            </>
            
        ): (
            <div className="flex flex-col justify-center items-center gap-4 py-8">
                    <img src="/assets/images/illustration-empty-cart.svg" alt="Empty cart" />
                    <p className="text-m-Rose500">Your added items will apear here</p>
            </div>
        )}
        </section>
    </>
  )
}
