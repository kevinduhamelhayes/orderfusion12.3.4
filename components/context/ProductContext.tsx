

import {
  createContext, useContext, useMemo, useState,
} from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductContextProps {
  search: string;
  setSearch: (search: string) => void;
  // products: Product[];
}

const ProductContext = createContext<ProductContextProps>({
  search: '',
  setSearch: () => {},
  // products: [],
})

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  const value = useMemo(() => ({
    search,
    setSearch,
  }), [search])

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
