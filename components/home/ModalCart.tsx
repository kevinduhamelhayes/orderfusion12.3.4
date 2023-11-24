/* eslint-disable linebreak-style */
import useCart from '../(store)/store'
import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import ModalCardProduct from './ModalCardProduct'

const ModalCart = ({ isOpen, toggleDropdown, modalRef }) => {
  const cart = useCart((state: any) => state.cart)
  const emptyCart = useCart((state: any) => state.emptyCart)
  const totalPrice = useCart((state: any) => state.totalPrice)
  if (!isOpen) return null

  return (
    <aside
      ref={modalRef}
      className="fixed left-[50%] top-40 z-20 flex h-[60%] w-[90%] max-w-[540px]  translate-x-[-50%] flex-col
      rounded-xl bg-white  p-4 pb-24 shadow-md shadow-slate-500
      "
    >
      <span className="mb-4 flex w-full justify-between">
        <h3 className=" text-xl font-semibold">
          Tu carrito:
        </h3>
        <button
          onClick={toggleDropdown}
          className="aspect-square rounded-full p-0 text-4xl font-bold text-red-500 hover:bg-red-500 hover:text-white"
          type="button"
        >
          <AiOutlineCloseCircle />
        </button>
      </span>
      {cart.length > 0 ? (
        <section className="flex h-full flex-col justify-between">

          <ul className="mb-10 mt-2 flex grow flex-col gap-2 overflow-y-scroll pb-2 pr-3">

            {cart.map((product) => (
              <li key={product.id} className="flex justify-between rounded-2xl border-t-2 shadow-xl">
                <ModalCardProduct product={product} />
              </li>
            ))}
          </ul>
          <div className="absolute bottom-4 right-0 mt-6 flex w-full items-center justify-between border-t-2 bg-white px-2 pt-2">
            <button
              type="button"
              className="rounded-lg border-2 border-red-500 bg-white px-6 py-3  font-semibold text-red-500 shadow-md
             hover:bg-red-500 hover:text-white"
              onClick={emptyCart}
            >
              Vaciar Carrito

            </button>
            <span className="flex items-center justify-center text-xl font-semibold">
              Suma:
              {' $'}
              {totalPrice}
              {' '}
            </span>
            <button
              type="button"
              className="rounded-lg border-2 border-green-500 bg-white px-6 py-3  font-semibold text-green-500
            shadow-md hover:bg-green-500 hover:text-white"
            >
              Realizar Pedido

            </button>
          </div>
        </section>
      ) : (
        <span className="mt-4 flex w-full flex-col items-center gap-4">
          <p className="mt-2">No hay productos en tu carrito</p>
          <button
            type="button"
            className="rounded-lg border-2 border-green-500 bg-white px-6 py-3  font-semibold
          text-green-500 shadow-md hover:bg-green-500 hover:text-white"
            onClick={toggleDropdown}
          >
            Volver

          </button>
        </span>
      )}
    </aside>
  )
}

export default ModalCart
