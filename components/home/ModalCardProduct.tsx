'use client'

import Image from 'next/image'

export default function ModalCardProduct({ product }) {
  return (
    <>
      <figure className="relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <Image
          alt="imagen de producto"
          src={product.images[1]}
          height={120}
          width={120}
          className="h-full w-full rounded-2xl object-cover"
        />
      </figure>

      <div className="mt-3 flex w-full justify-between px-4">
        <span className="mr-2 w-1/2 truncate text-sm font-semibold">{product.title}</span>
        <span className="font-medium text-gray-700">
          $
          {parseFloat(product.price).toFixed(2)}
        </span>
      </div>

    </>
  )
}
