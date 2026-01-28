import { createContext, useContext } from "react";

export const CartConetxt = createContext();

export function useCartContext() {
    return useContext(CartConetxt);
}
