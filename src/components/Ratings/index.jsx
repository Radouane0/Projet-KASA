import React from 'react'
import FullStar from '../../assets/FullStar.png'
import EmptyStar from '../../assets/EmptyStar.png'
import '../../styles/sass/main.scss'
// faire une condition dans la src pour que l'image change. Aller tester la valeur de ratings

function Ratings({ ratings }) {
    return (
        <div className="ratings">
            <img
                src={ratings >= 1 ? FullStar : EmptyStar}
                alt="étoile"
                className="ratings__star"
            ></img>
            <img
                src={ratings >= 2 ? FullStar : EmptyStar}
                alt="étoile"
                className="ratings__star"
            ></img>
            <img
                src={ratings >= 3 ? FullStar : EmptyStar}
                alt="étoile"
                className="ratings__star"
            ></img>
            <img
                src={ratings >= 4 ? FullStar : EmptyStar}
                alt="étoile"
                className="ratings__star"
            ></img>
            <img
                src={ratings >= 5 ? FullStar : EmptyStar}
                alt="étoile"
                className="ratings__star"
            ></img>
        </div>
    )
}

export default Ratings
