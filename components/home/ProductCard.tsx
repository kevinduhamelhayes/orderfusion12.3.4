/* eslint-disable max-len */

'use client'

import Image from 'next/image'
import useCart from '../(store)/store'
import { IoMdAdd } from 'react-icons/io'

export default function ProductCard({ product }) {
  const addToCart = useCart((state : any) => state.addToCart)
  return (
    <article
      className="flex w-[90%] max-w-[720px] items-center rounded-2xl border p-0"
      key={product.id}
    >
      <div className="flex w-full items-center justify-between">
        <figure className="mr-4 aspect-auto w-[120px] min-w-[90px]">
          <Image
            alt="imagen de producto"
            src={product.images[1]}
            height={120}
            width={120}
            className="w-[120px] rounded-l-2xl"
          />
        </figure>
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-full flex-col gap-2 overflow-hidden">
              <h3 className="w-full  truncate font-semibold sm:text-xl">{product.title}</h3>

              <p className="font-medium">
                $
                {product.price}
              </p>
            </div>

            <button
              type="button"
              className=" mr-4 flex items-center gap-2 rounded-lg border-2 border-green-400 px-4 py-3 font-bold text-green-400 transition-colors duration-150 sm:hover:bg-green-400 sm:hover:text-white"
              onClick={() => addToCart(product)}
            >
              <IoMdAdd />
              {' '}
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
