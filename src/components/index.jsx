import { Link } from 'react-router-dom'
import LOGO from '../assets/LOGO.png'

const Header = () => {
    return (
        <nav>
            <img src={LOGO} alt="Logo Kasa" className="logo-kasa" />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
