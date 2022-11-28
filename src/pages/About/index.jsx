import React from 'react'
import BannerAboutMobile from '../../assets/BannerAboutMobile.png'
import BannerAbout from '../../assets/BannerAbout.png'
import AboutDatas from '../../datas/about.json'
import Collapse from '../../components/Collapse'
import '../../styles/sass/main.scss'

function About() {
    return (
        <div>
            <div className="about">
                <img
                    className="about__img"
                    src={BannerAboutMobile}
                    alt="montagnes"
                ></img>
                <img
                    className="about__img2"
                    src={BannerAbout}
                    alt="montagnes"
                ></img>
            </div>
            <div className="collapse-about">
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
        </div>
    )
}

export default About
