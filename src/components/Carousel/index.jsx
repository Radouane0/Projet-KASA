import React from 'react'
import { useState } from 'react'
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'

function Carousel({ pictures }) {
    const [stateIndex, setStateIndex] = useState(0)
    const picture = pictures[stateIndex]
    const totalPictures = pictures.length
    const maxIndex = totalPictures - 1
    const Before = () => {
        setStateIndex(stateIndex === 0 ? maxIndex : stateIndex - 1)
    }
    const After = () => {
        setStateIndex(stateIndex === maxIndex ? 0 : stateIndex + 1)
    }
    return (
        <div className="carousel">
            <img src={picture} alt="Intérieur maison"></img>
            {totalPictures === 1 ? null : (
                <button onClick={Before} className="carousel__left">
                    <img src={LeftArrow} alt="Flèche de gauche"></img>
                </button>
            )}
            {totalPictures === 1 ? null : (
                <button onClick={After} className="carousel__right">
                    <img src={RightArrow} alt="Flèche de droite"></img>
                </button>
            )}
            {totalPictures === 1 ? null : (
                <div className="carousel__compteimg">
                    {stateIndex + 1}/{totalPictures}
                </div>
            )}
        </div>
    )
}

export default Carousel
