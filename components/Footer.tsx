import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import IconButton from './IconButton'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-48 justify-center items-center font-light'>
      <div className='text-xs md:text-sm lg:text-base'>
        <span>Bu web sitesinin kaynak kodlarına</span>
        <a className='mx-1 underline font-medium hover:brightness-[.25]' href='https://github.com/yunustaha/personal-website' target="_blank">GitHub üzerinden</a>
        <span>ulaşabilirsiniz.</span>
      </div>
      <div className='flex gap-4 text-4xl lg:text-2xl'>
        <IconButton url='https://www.instagram.com/yunustaha1/' >
          <FaInstagram />
        </IconButton>
        <IconButton url='https://www.linkedin.com/in/yunustahayilmaz/'>
          <FaLinkedin />
        </IconButton>
      </div>
    </footer>
  )
}

export default Footer