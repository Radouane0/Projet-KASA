import React from 'react'
import '../../styles/sass/main.scss'

function Host({ name, picture }) {
    return (
        <div className="host">
            <div className="host__name">
                <p className="host__name host__name--prenom">
                    {name.split(' ')[0]}
                </p>
                <p className="host__name host__name--nom">
                    {name.split(' ')[1]}
                </p>
            </div>
            <img src={picture} alt="profil" className="host__img"></img>
        </div>
    )
}

export default Host
