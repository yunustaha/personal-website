import Link from 'next/link'
import React from 'react'

type IconCardProps = {
    icon: React.ReactNode,
    description: string,
    href: string
}

const IconCard: React.FC<IconCardProps> = ({ icon, description, href }) => {
    return (
        <Link className='bg-slate-200 w-40 h-10 rounded flex items-center gap-4 px-4 hover:-translate-y-1 ease-in-out duration-300' href={href} target='_blank'>
            {icon}
            <span>{description}</span>
        </Link>
    )
}

export default IconCard