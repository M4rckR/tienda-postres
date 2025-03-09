import { useDessertStore } from "../store"

export const DessertCart = () => {

   const dessertCart =  useDessertStore(state => state.dessertCart)
   const dessertCartQuantity =  dessertCart.length

  return (
    <>
        <section className="lg:col-start-8 lg:col-end-13 xl:col-start-9 xl:col-end-13 bg-white rounded p-8 sticky top-12">
            <h2 className="text-m-Red font-bold text-3xl">Your Cart: {dessertCartQuantity}</h2>                
            
        {dessertCart.length > 0? (
            dessertCart.map((item) => (
                <section>
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
                    <section>
                        <p>Order Total</p>
                        <p></p>
                    </section>
                </section>
                
            ))
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
