import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import IconButton from './IconButton'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center font-light my-8'>
      <div className='flex gap-[20vw]'>
        <div>
          <span>Bu web sitesinin kaynak kodlarına</span>
          <a className='mx-1 underline font-medium hover:brightness-[.25]' href='https://github.com/yunustaha' target="_blank">GitHub üzerinden</a>
          <span>ulaşabilirsiniz.</span>
        </div>
        <div className='flex gap-4 text-2xl'>
          <IconButton url='https://www.instagram.com/yunustaha1/' >
            <FaInstagram />
          </IconButton>
          <IconButton url='https://www.linkedin.com/feed/'>
            <FaLinkedin />
          </IconButton>
        </div>
      </div>
    </footer>
  )
}

export default Footer