import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Projects = () => {
  return (
    <main className='flex flex-col items-start justify-center gap-16'>
      <h1 className='text-title text-4xl font-semibold '>Projeler</h1>
      <ProjectCard title={'Mutay Tech'} description={'Next.js ve Tailwind CSS ile Formik, Leaflet, Axios ve React-Toastify paketlerini kullanarak Mutay Tech isimli marka için geliştirdiğim tanıtım websitesi projesi.'} imgUrls={['/projects/mutay-home.png', '/projects/mutay-about.png', '/projects/mutay-contact.png']} liveUrl={'https://mutaytech.com.tr/'} />
      <ProjectCard title={'Avanos Bilgisayar'} description={'Next.js ve Tailwind CSS ile Avanos Bilgisayar isimli marka için geliştirdiğim tanıtım websitesi projesi.'} imgUrls={['/projects/avanosbilgisayar-home.png', '/projects/avanosbilgisayar-contact.png']} liveUrl={'http://avanosbilgisayar.com/'} />
    </main>
  )
}

export default Projects