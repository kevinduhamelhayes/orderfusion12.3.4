/* eslint-disable @next/next/no-async-client-component */

import ProductList from '@/components/home/ProductList'
import ClientLayout from '@/components/layouts/ClientLayout'

const getProduct = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products')
  if (!response.ok) throw new Error('Failed to fetch data')
  return response.json()
}

export default async function Home({ params }) {
  const products = await getProduct()
  const { id } = params

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
