'use client'

import React from 'react'
import useModal from '../../hooks/useModal'
import Logo from '../../../public/logo.png'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import ModalCart from '../home/ModalCart'
// import { useSession } from '../../context/sessionContext'
// import useClient from '@/hooks/useClient'

const CLIENT_DEFAULT = {
  icon: Logo,
  name: 'OrderFusion',
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure()
  // const { sessionData, setSessionData } = useSession()
  // const { productsSelected } = sessionData
  // const { client } = useClient(
  const { isOpen, toggleDropdown, ref } = useModal()

  return (
    <main className="overflow-x-hidden">
      <Navbar client={CLIENT_DEFAULT} />
      {children}
      <ModalCart isOpen={isOpen} toggleDropdown={toggleDropdown} modalRef={ref} />
      <BottomNav toggleDropdown={toggleDropdown} />
    </main>
  )
}
