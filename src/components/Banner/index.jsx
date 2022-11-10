import React from 'react'
import '../../styles/sass/main.scss'

function Banner({ img, text }) {
    return (
        <div className="banner">
            <img src={img} alt="paysage" className="banner__img"></img>
            <p>{text}</p>
        </div>
    )
}

export default Banner
