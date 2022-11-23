import React from 'react'
import FullStar from '../../assets/FullStar.png'
import EmptyStar from '../../assets/EmptyStar.png'
// faire une condition dans la src pour que l'image change. Aller tester la valeur de ratings

function Ratings({ ratings }) {
    return (
        <div>
            <img src={EmptyStar} alt="étoile"></img>
            <img src={EmptyStar} alt="étoile"></img>
            <img src={EmptyStar} alt="étoile"></img>
            <img src={EmptyStar} alt="étoile"></img>
            <img src={EmptyStar} alt="étoile"></img>
        </div>
    )
}

export default Ratings
