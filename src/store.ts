import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { Dessert, DessertCart } from "./types";
import desserts from "./data/data.json"




type DessertStore = {
    desserts: Dessert[];
    dessertCart: DessertCart[];
    addToCart: (dessert:Dessert) => void;
}

export const useDessertStore = create<DessertStore>()(
    devtools((set) => ({
        desserts,
        dessertCart: [],
        addToCart: (dessert) => {
            set((state) => {
                
                const existingDessertIndex = state.dessertCart.findIndex(
                  (item) => item.id === dessert.id
                );
        
                if (existingDessertIndex !== -1) {
                  // Si el producto ya está en el carrito, solo actualizamos la cantidad
                  const updatedCart = [...state.dessertCart];

                  updatedCart[existingDessertIndex] = {
                    ...updatedCart[existingDessertIndex],
                    quantity: updatedCart[existingDessertIndex].quantity + 1,
                  };

                  return { dessertCart: updatedCart };
                }
        
                // Si no está en el carrito, agregamos el nuevo producto
                return {
                  dessertCart: [...state.dessertCart, { ...dessert, quantity: 1 }],
                };
              });
        }
            
    }))
)