import React from 'react'
import NavItem from './NavItem';

type NavProps = {
    className?: string,
    onItemClick?: (pathName: string) => void
}

const Nav: React.FC<NavProps> = ({ className, onItemClick }) => {

    return (
        <nav>
            <ul className={className}>
                <NavItem onClick={onItemClick} href='/' label='Hakkımda' />
                <NavItem onClick={onItemClick} href='/projects/' label='Projeler' />
                <NavItem onClick={onItemClick} href='/photos/' label='Fotoğraflar' />
                <NavItem onClick={onItemClick} href='/articles/' label='Yazılar' />
            </ul>
        </nav>
    )
}

export default Nav