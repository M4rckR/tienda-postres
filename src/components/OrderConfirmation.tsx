import { useMemo } from "react";
import { useDessertStore } from "../store";
import { ButtonSend } from "../utils/ButtonSend";


export const OrderConfirmation = () => {
  const dessertCart = useDessertStore((state) => state.dessertCart);
  const cartPriceTotal = useMemo(() => dessertCart.reduce((acc, i) =>  acc + (i.price  * i.quantity), 0 ).toFixed(2) , [dessertCart])

  const handleReset = () => {
    console.log('Hola')
  }

  return (
    <>
      <div className="fixed inset-1 bg-[rgba(0,0,0,0.5)] left-0 right-0 top-0 bottom-0 overflow-hidden">
        <div className="absolute bg-white p-8 rounded-2xl top-10 left-1/2 -translate-x-1/2 min-w-[90%] md:min-w-[500px] shadow max-h-[90vh] overflow-y-auto">
          <img className="pb-4" src="/assets/images/icon-order-confirmed.svg" alt="orden confirmada" />
          <h4 className="text-4xl font-bold text-m-Rose900 pb-1">Order Confirmed</h4>
          <p className="text-m-Rose500 pb-6">We hope you enjoy your food!</p>

          <div className="bg-m-Rose50 px-6 py-2">
            {dessertCart.map((item) => (
              <div className="flex items-center py-4 justify-between border-b border-m-Rose100">
                <div className="flex gap-4 items-center">
                  <img className="rounded-lg w-12" src={`${item.image.thumbnail}`} alt="" />
                  <div>
                    <p className="font-semibold text-m-Rose900">{item.name}</p>
                    <div className="flex gap-2">
                      <p className="text-m-Red font-semibold">{item.quantity}x</p>
                      <p className="text-m-Rose400">@{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-m-Rose900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between pt-6 pb-4 text-m-Rose900">
              <p>Order Total</p>
              <p className="text-m-Rose900 font-bold text-2xl">${cartPriceTotal}</p>
            </div>
          </div>

          <div 
            className="mt-8"
            onClick={handleReset}
          >
            <ButtonSend>Start New Order</ButtonSend>
          </div>

        </div>
      </div>
    </>
  );
};
