import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconCard from './IconCard'
import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'

type ProjectCard = {
    title: string,
    description: string,
    imgUrls: Array<string>,
    gitHubUrl?: string,
    liveUrl?: string
}

const ProjectCard: React.FC<ProjectCard> = ({ title, description, imgUrls, gitHubUrl, liveUrl }) => {
    return (
        <div className='relative flex flex-col gap-8'>
            <h1 className='text-title text-2xl font-semibold' >{title}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {imgUrls.map(
                    (img, index) =>
                        <Link key={index} href={img} target='_blank' >
                            <Image
                                key={index}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto rounded hover:scale-105 ease-in-out duration-500"
                                layout='responsive'
                                src={img}
                                alt={title}
                            />
                        </Link>
                )}
            </div>
            <p>{description}</p>
            <div className='flex gap-4'>
                {gitHubUrl && <IconCard icon={<BsGithub size={24} />} description={'GitHub'} href={gitHubUrl} />}
                {liveUrl && <IconCard icon={<TbWorldWww size={24} />} description={'Canlı Link'} href={liveUrl} />}
            </div>
        </div>
    )
}

export default ProjectCard