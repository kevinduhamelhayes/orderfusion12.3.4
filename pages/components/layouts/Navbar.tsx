'use client'

import Link from 'next/link'
import Image from 'next/image'
import useModal from '../../hooks/useModal'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

export default function Navbar({ client }) {
  const { icon, name } = client
  const { isOpen, toggleDropdown, ref } = useModal()

  return (
    <div ref={ref} className=" ">
      <nav className="relative flex h-[60px] w-full flex-row items-center justify-between bg-[#fafafa] px-5  lg:px-12 ">
        <span className="flex items-center gap-2 text-xl font-bold ">
          <Image
            src={icon}
            height={40}
            width={40}
            alt="client logo"
          />
          <h1>
            {name}
          </h1>
        </span>
        <button type="button" onClick={toggleDropdown}>
          <AiOutlineMenu size={40} color="orange" />
        </button>
      </nav>
      <nav className={`fixed ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} right-0 top-[60px]
       z-[10] h-[94%] w-[400px] bg-[#fafafa] transition-transform duration-300`}
      >
        <div className="flex h-full flex-col justify-between bg-white p-4">
          <Link href="/admin/products" className="flex w-full items-center px-4 py-2">
            <button type="button" aria-label="Admin" className="bg-primary-yellow mr-4 flex h-12 w-12 items-center justify-center rounded-full">
              <CgProfile size={40} color="orange" />
            </button>
            <span className="text-lg font-medium">Admin</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
