'use client'

import React from 'react'

const Searcher = ({ setSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <header className="mb-4 flex w-full justify-center pt-5">
      <input
        type="text"
        onChange={handleChange}
        className="shadow-inner-2xl h-[40px] w-[90%] max-w-[720px] rounded-[10px] bg-[#f1f1f1] px-5 text-xl "
        placeholder="Buscar..."
      />
    </header>

  )
}

export default Searcher
