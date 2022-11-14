import React from 'react'
import Banner from '../../components/Banner'
import BannerHome from '../../assets/BannerHome.png'
import Logements from '../../datas/logements.json'

//import Card from '../../components/Card'

function Home() {
    return (
        <div>
            <Banner img={BannerHome} text="Chez vous, partout et ailleurs" />
            <ul>
                {Logements.map((logement) => (
                    <li key={logement.id}>
                        {/* <Card
                            id={logement.id}
                            cover={logement.cover}
                            title={logement.title}
                        /> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
