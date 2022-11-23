import React from 'react'

function Host({ name, picture }) {
    return (
        <div>
            {name}
            <img src={picture} alt="profil"></img>
        </div>
    )
}

export default Host
