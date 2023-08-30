"use client"

import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import Nav from './Nav/Nav'


const Header = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false)

  const handleClickHamburger = () => {
    setOpenHamburger(current => (!current))
  }

  return (
    <header>
      <div className='block lg:hidden ml-6 mt-6'>
        <RxHamburgerMenu onClick={handleClickHamburger} className='cursor-pointer' size={48} />
      </div>
      <Nav className='hidden lg:flex gap-4 justify-center lg:justify-end mt-10 mr-0 lg:mr-56' />
      <div className={`fixed rounded-b ${openHamburger ? '-left-0' : '-left-[100%]'} ease-in-out duration-500 h-full top-0 w-2/3 bg-white shadow z-40`}>
        <div className='flex justify-end w-full p-4'>
          <IoMdClose onClick={handleClickHamburger} className='cursor-pointer' size={48} />
        </div>
        <Nav onItemClick={handleClickHamburger} className='flex flex-col gap-6 m-10 ' />
      </div>
    </header>
  )
}

export default Header