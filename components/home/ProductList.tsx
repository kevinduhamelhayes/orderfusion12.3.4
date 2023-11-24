'use client'

import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import Searcher from './Searcher'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  const { search, setSearch } = useProductContext()
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (search === '') {
      setFilteredProducts(products)
    } else {
      const result = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
      setFilteredProducts(result)
    }
  }, [search, products])

  return (
    <section className="mb-20 mt-2  flex w-full flex-col items-center gap-2">
      <Searcher setSearch={setSearch} />
      {filteredProducts.slice(0, 10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filteredProducts.length === 0 && (
        <div className="flex w-[90%] max-w-[720px] items-center rounded-2xl border border-black p-2">
          <p>Lo sentimos, pero no hay productos que coincidan con tu busqueda</p>
        </div>
      )}
    </section>
  )
}

export default ProductList
