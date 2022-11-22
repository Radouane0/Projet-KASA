import React from 'react'
import { NavLink } from 'react-router-dom'
import Error404 from '../../assets/Error404.png'
import '../../styles/sass/main.scss'

function Error() {
    return (
        <div className="error">
            <img className="error__img" src={Error404} alt="Erreur 404" />
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error__link">
                Retour à la page d'accueil
            </NavLink>
        </div>
    )
}

export default Error
