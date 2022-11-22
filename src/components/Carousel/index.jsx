import React from 'react'
import { useState } from 'react'

function Carousel({ pictures }) {
    const picture = pictures[0]
    const [stateIndex, setStateIndex] = useState(0)
    return (
        <div>
            <img src={picture} alt="Intérieur maison"></img>
        </div>
    )
}

export default Carousel
