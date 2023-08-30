import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type NavItemProps = {
  className?: string,
  href: string,
  label: string,
  onClick?: (pathName: string) => void
}

const NavItem: React.FC<NavItemProps> = ({ className, href, label, onClick }) => {
  const pathName = usePathname();

  return (
    <li>
      <Link className={classNames('nav-item', pathName == href ? 'brightness-[.25]' : '', className)} onClick={() => onClick ? onClick(pathName) : void 0} href={href}>
        {label}
      </Link>
    </li>
  )
}

export default NavItem