import type { Dessert } from "@/type/products";
import { create } from "zustand";

type CartItem = Dessert & { quantity: number };

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Dessert) => void;
  removeFromCart: (productName: string) => void;
  decrementQuantity: (productName: Dessert["name"]) => void;
  getProductQuantity: (productName: Dessert["name"]) => number;
  getProductTotal: () => number;
  getOrderTotal: () => string;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addToCart: (product: Dessert) =>
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.name === product.name
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productName: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.name !== productName),
    })),

  clearCart: () => set({ cartItems: [] }),

  decrementQuantity: (productName: Dessert["name"]) =>
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.name === productName
      );
      if (!existing) return { cartItems: state.cartItems };
      if (existing.quantity <= 1) {
        return {
          cartItems: state.cartItems.filter(
            (item) => item.name !== productName
          ),
        };
      }
      return {
        cartItems: state.cartItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }),

  getProductQuantity: (productName: Dessert["name"]) => {
    const item = get().cartItems.find((item) => item.name === productName);
    return item?.quantity || 0;
  },

  getProductTotal: () =>
    get().cartItems.reduce((total, item) => total + item.quantity, 0),

  getOrderTotal: () =>
    get()
      .cartItems.reduce(
        (sum, item) => sum + Number(item.price ?? 0) * (item.quantity ?? 1),
        0
      )
      .toFixed(2),
}));
