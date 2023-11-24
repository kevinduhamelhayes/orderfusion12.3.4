/* eslint-disable @next/next/no-async-client-component */

import { useEffect, useState } from 'react'
import ProductList from '@/components/home/ProductList'
import ClientLayout from '@/components/layouts/ClientLayout'
import { useRouter } from 'next/router'

const getProduct = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products')
  if (!response.ok) throw new Error('Failed to fetch data')
  return response.json()
}

export default async function Home() {
  const [products, setProducts] = useState([])
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getProduct()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message))
  }, [])

  if (!products) return <h1>Cargando...</h1>
  return (
    <ClientLayout>
      <main className="relative flex h-auto w-full flex-col">
        <h2 className="mt-8 text-center text-2xl font-bold">
          Mesa
          {' '}
          {id}
        </h2>
        <ProductList products={products} />
      </main>
    </ClientLayout>
  )
}
