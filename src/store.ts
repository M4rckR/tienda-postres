import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { Dessert, DessertCart } from "./types";
import desserts from "./data/data.json"




type DessertStore = {
    handleProcessOrder : () => void;
    processOrder: boolean;
    handleConfirmOrder: () => void;
    desserts: Dessert[];
    dessertCart: DessertCart[];
    addToCart: (dessert:Dessert) => void;
    increaseQuantity: (dessert:DessertCart) => void;
    decreaseQuantity: (dessert:DessertCart) => void;
    deleteDessert: (dessert:DessertCart) => void;
}

export const useDessertStore = create<DessertStore>()(
    devtools((set) => ({
        desserts,
        processOrder: false,
        dessertCart: [],
        addToCart: (dessert) => {
            set((state) => {
                
                // const existingDessertIndex = state.dessertCart.findIndex(
                //   (item) => item.id === dessert.id
                // );
        
                // if (existingDessertIndex !== -1) {
                  // Si el producto ya está en el carrito, solo actualizamos la cantidad
                //   const updatedCart = [...state.dessertCart];

                //   updatedCart[existingDessertIndex] = {
                //     ...updatedCart[existingDessertIndex],
                //     quantity: updatedCart[existingDessertIndex].quantity + 1,
                //   };

                //   return { dessertCart: updatedCart };
                // }
        
                // Si no está en el carrito, agregamos el nuevo producto
                return {
                  dessertCart: [...state.dessertCart, { ...dessert, quantity: 1 }],
                };
              });
        },

        handleProcessOrder: () => {
          set({
            processOrder : true
          })
        },

        handleConfirmOrder: () => {
          set({
            dessertCart: [],
            processOrder: false
          })
        },

        increaseQuantity: (dessert) => {
          set((state) =>  {
            const existingDessertIndex = state.dessertCart.findIndex (
              (item) => item.id === dessert.id
            )

            if(existingDessertIndex !== -1){
              const updatedCart = [...state.dessertCart];

              updatedCart[existingDessertIndex] = {
                ...updatedCart[existingDessertIndex],
                quantity: updatedCart[existingDessertIndex].quantity + 1,
              }

              return {dessertCart: updatedCart}
            } 
            else {
              return {
                dessertCart: [...state.dessertCart, { ...dessert, quantity: 1 }],
              }
            }
          })
        },


        decreaseQuantity: (dessert) => {
          set((state) =>  {
            const existingDessertIndex = state.dessertCart.findIndex (
              (item) => item.id === dessert.id
            )

            if(existingDessertIndex !== -1){
              let updatedCart = [...state.dessertCart];
              const dessertToUpdate = updatedCart[existingDessertIndex];
              
              if(dessertToUpdate.quantity > 1) {
                updatedCart[existingDessertIndex] = {
                  ...dessertToUpdate,
                  quantity: dessertToUpdate.quantity - 1,
                }
              }

              else if(dessertToUpdate.quantity === 1) {
                updatedCart = updatedCart.filter((item) => item.id !== dessert.id);
              }


              return {dessertCart: updatedCart}
            } 
            else {
              return {
                dessertCart: [...state.dessertCart],
              }
            }
          })
        },


        deleteDessert: (dessert) => {
          
          set((state) => {
            const updatedCart = state.dessertCart.filter((item) => item.id !== dessert.id);

            return {
              dessertCart: updatedCart
            }
          })
        }
            
    }))
) 