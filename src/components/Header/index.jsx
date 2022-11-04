import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/housing">Logements</Link>
        </nav>
    )
}

export default Header
