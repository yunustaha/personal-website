import React from 'react'
import getArticles, { MediumModel } from './medium';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/tr'

const Articles = async () => {
  const posts: MediumModel | boolean = await getArticles();

  return (
    <main className='flex flex-col gap-8'>
      <h1 className='text-title text-4xl font-semibold '>Yazılar</h1>
      <ul className='flex flex-col gap-4 list-disc ml-8'>
        {posts && posts.items.map((item, index) => {
          return <li>
            <div className='flex flex-col gap-1'>
              <Link key={index} href={item.link} target='_blank' className='text-title font-medium' >
                {item.title}
              </Link>
              <time>{moment(item.pubDate, 'YYYY-MM-DD HH:mm').locale('tr').format('LL')}</time>
            </div>
          </li>
        })}
      </ul>
    </main>
  )
}

export default Articles