import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sass/main.scss'

function Card({ id, cover, title }) {
    return (
        <Link to={'/housing/' + id} className="card">
            <img src={cover} alt="Logement" className="card__img"></img>
            <p>{title}</p>
        </Link>
    )
}

export default Card
