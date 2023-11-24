import { create } from 'zustand'

const useCart = create(
  (set) => ({
    cart: [],
    totalPrice: 0,
    addToCart: (params) => {
      set((state) => {
        const newCart = [...state.cart, params]
        return {
          ...state,
          cart: newCart,
          totalPrice: newCart.reduce((acc, curr) => acc + curr.price, 0),
        }
      })
    },
    removeFromCart: (params) => {
      const { id } = params
      set((state) => {
        const newCart = state.cart.filter((element) => element.id !== id)
        return {
          ...state,
          cart: newCart,
        }
      })
    },
    emptyCart: () => {
      set((state) => ({
        ...state,
        cart: [],
      }))
    },
  }),
)

export default useCart
