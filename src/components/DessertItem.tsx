import { useDessertStore } from "../store";
import { Dessert, DessertCart } from "../types";
type DessertItemProps = {
    dessert: Dessert;
}

export const DessertItem = ({dessert}:DessertItemProps) => {

    // const dessertCart = (useDessertStore(state => state.dessertCart))
    const addToCart = (useDessertStore(state => state.addToCart))
    const dessertCart = (useDessertStore(state => state.dessertCart))
    const increaseQuantity = (useDessertStore(state => state.increaseQuantity))
    const decreaseQuantity = (useDessertStore(state => state.decreaseQuantity))

    const cartItem = dessertCart.find(item => item.id === dessert.id);

    const onIncreaseQuantity = (cartItem:DessertCart) => {
        increaseQuantity(cartItem)
    }
    const onDecreaseQuantity = (cartItem:DessertCart) => {
        decreaseQuantity(cartItem)
    }


    const renderCartStatus = () => {
        if (cartItem) {
            if (cartItem.quantity !== 0) {
                return (
                    <div 
                    className="box-quantity-active">
                        <div 
                            className="btn-quantity"
                            onClick={() => onDecreaseQuantity(cartItem)}
                            >
                            -
                        </div>
                        <p>{cartItem.quantity}</p>
                        <div 
                            className="btn-quantity"
                            onClick={() => onIncreaseQuantity(cartItem)}
                            >
                            +
                        </div>
                    </div>
                )
            }
            return null;
        }
        return (

            <div 
                    className="bg-white py-2 px-4 rounded-2xl border border-m-Rose500 absolute -bottom-5 left-0 right-0 flex gap-2 cursor-pointer items-center whitespace-nowrap hover:scale-105 transition-all duration-150 mx-12 justify-center"
                    onClick={() => handleAddToCart(dessert)}
                >
                    <img src="/assets/images/icon-add-to-cart.svg" alt="Añadir al carrito" />
                    <p className="text-center font-semibold text-m-Rose900">Añadir al carrito</p>
            </div>
        )
    };

  const handleAddToCart = (dessert:Dessert) => {
        addToCart(dessert)
  }



  return (
    <>
        <article>
            <div className="relative mb-6">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
                    <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
                    <img className="rounded-lg" src={dessert.image.mobile} alt={dessert.name} />
                </picture>
                {renderCartStatus()}
            </div>
            <div>
                <p className="text-sm text-m-Rose500">{dessert.category}</p>
                <p className="font-semibold">{dessert.name}</p>
                <p className="text-m-Red font-bold">S/. {dessert.price.toFixed(2)}</p>
            </div>
        </article>
    </>
  )
}
