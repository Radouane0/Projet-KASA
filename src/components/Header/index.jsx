import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/LOGO.png'
import '../../styles/sass/main.scss'

function Header() {
    return (
        <header className="header">
            <img src={LOGO} alt="Logo Kasa" className="header__img" />
            <nav className="header__nav">
                <div className="header__nav-items">
                    <NavLink to="/" end="true">
                        ACCUEIL
                    </NavLink>
                    <NavLink to="/about">A PROPOS</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
