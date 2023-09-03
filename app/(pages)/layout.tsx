import React from 'react'

function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='mx-auto w-4/5 lg:w-3/5'>
            {children}
        </div>
    )
}

export default Layout