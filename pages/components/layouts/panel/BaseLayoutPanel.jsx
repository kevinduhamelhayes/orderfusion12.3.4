import Head from 'next/head'
import NavbarPanel from './NavbarPanel'

function BaseLayoutPanel({ children }) {
  return (
    <>
      <Head>
        <title>Order Fusion - Panel</title>
        <link rel="icon" href="/images/icons/brand/logo.png" />
      </Head>
      <section className="m-0 flex h-[auto]  min-h-screen w-[100vw] flex-row overflow-x-hidden p-0 ">
        <NavbarPanel />
        {children}
      </section>
    </>
  )
}

export default BaseLayoutPanel
