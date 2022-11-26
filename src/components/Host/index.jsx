import React from 'react'
import '../../styles/sass/main.scss'

function Host({ name, picture }) {
    return (
        <div className="host">
            <p className="host__name">{name}</p>
            <img src={picture} alt="profil" className="host__img"></img>
        </div>
    )
}

export default Host
