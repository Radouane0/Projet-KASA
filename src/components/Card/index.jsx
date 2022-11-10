import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
    return <Link to={'/housing/' + id}>test</Link>
}

export default Card
