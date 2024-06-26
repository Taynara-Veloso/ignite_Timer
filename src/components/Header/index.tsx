import { HeaderContainer } from './styles'
import { Timer, Scroll, Palette } from 'phosphor-react'
import logoIgnite from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/">
          <Palette size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
