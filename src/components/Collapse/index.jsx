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
    const ContentCollapse = Array.isArray(content) ? (
        <ul>
            {content.map((element) => (
                <li key={element}>{element}</li>
            ))}
        </ul>
    ) : (
        <p>{content}</p>
    )
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
            {isOpen ? (
                <div className="button__content">{ContentCollapse}</div>
            ) : null}
        </div>
    )
}

export default Collapse
