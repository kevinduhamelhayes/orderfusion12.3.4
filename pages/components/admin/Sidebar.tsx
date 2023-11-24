import React from 'react'
import Link from 'next/link'
import Logo from '@/logo.png'
import Image from 'next/image'

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Orders', href: '/admin/orders' },
    { name: 'Products', href: '/admin/products' },
    { name: 'Clients', href: '/admin/clients' },
    { name: 'Settings', href: '/admin/settings' },
  ]
  return (
    <nav className="fixed flex h-full w-[12%] flex-col items-center bg-black pt-8">
      <figure className="rounded-full bg-white p-2">
        <Image
          src={Logo}
          height={40}
          width={40}
          alt="client logo"
        />
      </figure>
      <h3 className="mb-4 mt-2 text-2xl font-medium text-white">Order Fusion</h3>
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={link.name}
          className={`flex w-full flex-col items-center gap-2 border-t border-white py-2 text-center text-xl font-medium text-white ${
            index === links.length - 1 && 'border-b'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Sidebar
