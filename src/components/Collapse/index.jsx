import React from 'react'
import AboutButtonUp from '../../assets/AboutButtonUp.png'
import AboutButtonDown from '../../assets/AboutButtonDown.png'
import { useState } from 'react'
import '../../styles/sass/main.scss'

function Collapse({ category, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const OpenCollapse = () => {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    return (
        <div>
            <button onClick={OpenCollapse} className="button">
                {category}
                <img
                    src={isOpen ? AboutButtonUp : AboutButtonDown}
                    alt="Flèche"
                    className="button__img"
                ></img>
            </button>
            {isOpen ? <div>{content}</div> : null}
        </div>
    )
}

export default Collapse
