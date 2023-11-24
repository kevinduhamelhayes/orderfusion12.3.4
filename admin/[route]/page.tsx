/* eslint-disable react-hooks/rules-of-hooks */

'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const pathname = usePathname()
  return (
    <div className="ml-96">{pathname}</div>
  )
}

export default page
