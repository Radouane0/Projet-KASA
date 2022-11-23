import React from 'react'
import Banner from '../../components/Banner'
import BannerAboutMobile from '../../assets/BannerAboutMobile.png'
import AboutDatas from '../../datas/about.json'
import Collapse from '../../components/Collapse'

function About() {
    return (
        <div>
            <Banner img={BannerAboutMobile} text=" " />
            <ul>
                {AboutDatas.map((text, index) => (
                    <li key={index}>
                        {
                            <Collapse
                                category={text.category}
                                content={text.content}
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About
