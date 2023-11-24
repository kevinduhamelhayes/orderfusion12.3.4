import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'

const page = () => (
  <main className="flex h-screen w-full flex-col items-center justify-center bg-[#0d1117]">
    <figure className="mb-4 rounded-full bg-white p-6">
      <Image
        src={Logo}
        height={100}
        width={100}
        alt="client logo"
      />
    </figure>

    <h3 className="my-2 text-2xl font-semibold text-white">Bienvenido a Order Fusion</h3>
    <p className="w-[40%] text-center text-xl text-white">
      Estaremos encantados de tomar tu orden, por favor escanea el codigo QR de alguna mesa para continuar con tu pedido :)
    </p>
  </main>
)

export default page
