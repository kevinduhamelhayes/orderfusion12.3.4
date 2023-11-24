import Link from 'next/link'
import { Blocks, List } from '../../svgs'

export default function NavbarProducts({ routeName }) {
  return (
    <nav className="mx-auto flex h-auto w-[100%] justify-between bg-[#e9e9e9] p-5 ">
      <h3 className="text-[28px] font-bold ">{routeName}</h3>
      {/* <input type="text" className="w-[90%] mx auto mt-10 " /> */}

      {/* <div className="growing-search">
      <div className="input">
        <input type="text" name="search" />
      </div>
      <div className="submit">
        <button type="submit" name="go_search">
          <span className="">P</span>
        </button>
      </div>
    </div> */}
      <div className="flex w-[40%] items-center justify-evenly 2xl:w-[20%]">
        <button type="button" className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ddd] ">
          <Blocks className="" color="#222" />
        </button>
        <button type="button" className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ddd] ">
          <List className="" color="#222" />
        </button>
        <button type="button" className="flex items-center justify-center rounded-[10px] bg-[#ddd] px-3 py-2 ">
          Filtros
        </button>
        <Link
          href="/admin/products/create"
          className="flex items-center justify-center rounded-[10px] bg-[#0ca2ff] px-3 py-2 hover:bg-[#0a93e8] "
        >
          Add
        </Link>
      </div>
    </nav>
  )
}
