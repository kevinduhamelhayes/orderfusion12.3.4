import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 flex h-full w-[300px] flex-col items-center justify-center bg-[#000] py-10 text-[#fff] ">
      <div className="flex h-[10%] w-full items-center justify-center">
        <h1 className="text-[30px] font-bold ">Rico Gusto :) </h1>
      </div>
      <div className="flex h-[90%] w-full flex-col">
        <Link className="hover:bg-primary-yellow w-full px-3 py-4 hover:font-semibold hover:text-[#333] " href="/">
          Inicio
        </Link>
        <Link
          className="hover:bg-primary-yellow w-full px-3 py-4 hover:font-semibold hover:text-[#333] "
          href="/admin/products"
        >
          Productos
        </Link>
        <Link
          className="hover:bg-primary-yellow w-full px-3 py-4 hover:font-semibold hover:text-[#333] "
          href="/admin/usuarios"
        >
          Usuarios
        </Link>
        <Link
          className="hover:bg-primary-yellow w-full px-3 py-4 hover:font-semibold hover:text-[#333] "
          href="/admin/pedidos"
        >
          Ordenes
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
