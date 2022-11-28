import React from 'react'
import Banner from '../../components/Banner'
import BannerHome from '../../assets/BannerHome.png'
import Logements from '../../datas/logements.json'
import Card from '../../components/Card'

function Home() {
    return (
        <div>
            <Banner img={BannerHome} text="Chez vous, partout et ailleurs" />
            <div>
                <ul className="card__ul">
                    {Logements.map((logement) => (
                        <li key={logement.id} className="card__list">
                            {
                                <Card
                                    id={logement.id}
                                    cover={logement.cover}
                                    title={logement.title}
                                />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home
