import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
    return (
        <Link to={'/housing/' + id}>
            <img src={cover} alt="Logement"></img>
            <p>{title}</p>
        </Link>
    )
}

export default Card
