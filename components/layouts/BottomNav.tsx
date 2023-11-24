'use client'

import Link from 'next/link'
import useCart from '@/app/(store)/store'
import { FaPercent, FaHome } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function BottomNav({ toggleDropdown }) {
  const cart = useCart((state : any) => state.cart)
  return (
    <nav className="fixed bottom-0 flex h-[80px] w-full items-center justify-center">
      <section className="flex h-[70px] w-[90%] max-w-[720px] items-center justify-between rounded-[10px] border bg-[#ffe70f] px-10">
        <div className="rounded-xl border-4 border-black bg-inherit p-2 text-2xl font-bold text-black hover:bg-black  hover:text-white">
          <FaPercent />
        </div>
        <div className="rounded-xl  bg-inherit p-2 text-4xl font-bold text-black hover:bg-black  hover:text-white ">
          <Link href="/">
            <FaHome />
          </Link>
        </div>
        <button type="button" onClick={toggleDropdown} className="relative transition-transform duration-300 ease-in-out hover:scale-105">
          <HiOutlineShoppingCart size="45px" />
          {cart.length > -1 && (
            <span className="absolute right-[-4px] top-[-4px] flex h-[18px] w-[18px] items-center justify-center
            rounded-full bg-[#df0000] text-[14px] font-bold text-[#fff] "
            >
              {cart.length}

            </span>
          )}
        </button>
      </section>
    </nav>
  )
}
