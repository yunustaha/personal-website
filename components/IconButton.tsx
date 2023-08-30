import React from 'react'

type IconButtonProps = {
    children: React.ReactNode,
    url: string
}

const IconButton: React.FC<IconButtonProps> = ({ children, url }) => {
    return (
        <a href={url} target='_blank' className='hover:brightness-[.25]'>
            {children}
        </a>
    )
}

export default IconButton