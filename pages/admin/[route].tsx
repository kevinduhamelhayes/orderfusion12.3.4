/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'

const page = () => {
  const router = useRouter()
  console.log()
  return (
    <div className="ml-96">
      {router.query.route}
      </div>
  )
}

export default page
