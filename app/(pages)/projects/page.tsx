import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Projects = () => {
  return (
    <main className='flex flex-col items-start justify-center gap-16'>
      <h1 className='text-title text-4xl font-semibold '>Projeler</h1>
      <ProjectCard title={'Mutay Tech'} description={'Next.js ve Tailwind CSS ile Formik, Leaflet, Axios ve React-Toastify paketlerini kullanarak Mutay Tech isimli marka için geliştirdiğim tanıtım websitesi projesi.'} imgUrls={['/projects/mutay-home.jpeg', '/projects/mutay-about.jpeg', '/projects/mutay-contact.jpeg']} liveUrl={'https://mutaytech.com.tr/'} />
      <ProjectCard title={'Avanos Bilgisayar'} description={'Next.js ve Tailwind CSS ile Avanos Bilgisayar isimli marka için geliştirdiğim tanıtım websitesi projesi.'} imgUrls={['/projects/avanosbilgisayar-home.jpeg', '/projects/avanosbilgisayar-about.jpeg', '/projects/avanosbilgisayar-contact.jpeg']} liveUrl={'http://avanosbilgisayar.com/'} />
      <ProjectCard
        title={'Sport With AI'}
        description={`Bir tez projesi olarak üç kişilik bir ekip ile geliştirilmiş bir spor uygulaması olan Sport With AI'ı tasarladık ve kodladık. Bu uygulama, egzersiz hareketlerini görüntü işleme yoluyla analiz ediyor. Frontend için Angular, backend için NodeJS, mobil geliştirme için Flutter ve yapay zeka için Python kullanıldı. Sosyal medya bölümü için fotoğraf yükleme (EC2), metin paylaşımı (MongoDB) ve önbellek yapısı (Redis) uygulandı.`}
        imgUrls={['/projects/sportwithai.webp']}
        gitHubUrl='https://github.com/yunustaha/sport-with-ai-monorepo'
      />
      <ProjectCard title={'FieldCo CRM'} description={'İklimsa için FieldCo ekibi olarak CRM uygulaması oluşturduk, projenin mobil kısmını Flutter kullanarak oluşturmaya odaklandım.'} imgUrls={['/projects/fieldcocrm.webp']} liveUrl={'https://play.google.com/store/apps/details?id=com.mobim.fieldco_mobil_flutter&hl=tr&gl=US'} />
    </main>
  )
}

export default Projects