import React from 'react'
import Logo_footer from '../../assets/Logo_footer.png'
import '../../styles/sass/main.scss'

function Footer() {
    return (
        <div className="footer">
            <img src={Logo_footer} alt="Logo Kasa" className="footer__img" />
            <h1>© 2020 Kasa. All right reserved</h1>
        </div>
    )
}

export default Footer
