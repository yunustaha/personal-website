"use client"

import React from 'react'
import NavItem from './Nav/NavItem'

const Header = () => {

  return (
    <header>
      <nav>
        <ul className='flex gap-4 ml-[60vw] mt-10'>
          <NavItem href='/' label='Hakkımda' />
          <NavItem href='/projects/' label='Projeler' />
          <NavItem href='/photos/' label='Fotoğraflar' />
          <NavItem href='/articles/' label='Yazılar' />
        </ul>
      </nav>
    </header>
  )
}

export default Header