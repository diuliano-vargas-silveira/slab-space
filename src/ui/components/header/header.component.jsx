import { Link, useLocation } from 'react-router-dom'
import { iconSlabSpace } from '../../assets'
import { LINKS } from '../../constants'
import { Button } from '../'

import './header.style.scss'

const Header = () => {
  const { pathname } = useLocation()

  const renderMenu = () =>
    Object.keys(LINKS).map((name, index) => {
      const { path, label } = LINKS[name]

      const activeClass = path === pathname ? '--active' : ''

      return (
        <Link
          to={path}
          key={`link-menu-${index}`}
          className={`c-header__menu__link ${activeClass}`}
        >
          {label}
        </Link>
      )
    })

  return (
    <header className="c-header">
      <img
        src={iconSlabSpace}
        alt="Slab space, an enterprise that work in telescopes."
        className="c-header__icon"
      />

      <nav className="c-header__menu">{renderMenu()}</nav>

      <Button onClick={() => {}}>Lets Explore!</Button>
    </header>
  )
}

export { Header }
