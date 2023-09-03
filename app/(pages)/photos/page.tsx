import React from 'react'
import getPhotos, { UnsplashData } from './unsplash'
import Link from 'next/link'
import Image from 'next/image'

const Photos = async () => {
  const posts: UnsplashData | boolean = await getPhotos();

  return (
    <main className='flex flex-col gap-8'>
      <h1 className='text-title text-4xl font-semibold '>Fotoğraflar</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts && posts.map((item, index) => {
          return <>
            <Link key={index} href={item.links.html} target='_blank' >
              <Image
                className='rounded hover:scale-105 ease-in-out duration-500'
                src={item.urls.regular}
                alt={item.alt_description ?? 'Yunus Taha YILMAZ'}
                width={item.width}
                height={item.height}
                layout='responsive'
              />
            </Link>
          </>
        })}
      </div>
    </main>
  )
}

export default Photos