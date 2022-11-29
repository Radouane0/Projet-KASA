import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import HouseData from '../../datas/logements.json'
import Carousel from '../../components/Carousel'
import Tags from '../../components/Tags'
import Ratings from '../../components/Ratings'
import Collapse from '../../components/Collapse'
import Host from '../../components/Host'

function Housing() {
    const Param = useParams()
    const idHouse = Param.id
    const House = HouseData.find((data) => data.id === idHouse)
    if (!House) {
        return <Navigate to="/Error" />
    }
    return (
        <div>
            <Carousel pictures={House.pictures} />
            <h1>{House.title}</h1>
            <h2>{House.location}</h2>
            <Tags tags={House.tags} />
            <div className="housing__infos">
                <Ratings ratings={House.rating} />
                <Host name={House.host.name} picture={House.host.picture} />
            </div>
            <div className="collapse-logement">
                <div className="collapse-logement__button">
                    <Collapse
                        category="Description"
                        content={House.description}
                    />
                </div>
                <div className="collapse-logement__button">
                    <Collapse
                        category="Equipements"
                        content={House.equipments}
                    />
                </div>
            </div>
        </div>
    )
}

export default Housing
