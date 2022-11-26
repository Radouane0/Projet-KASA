import React from 'react'
import Logo_footer from '../../assets/Logo_footer.png'
import '../../styles/sass/main.scss'

function Footer() {
    return (
        <div className="footer">
            <img src={Logo_footer} alt="Logo Kasa" className="footer__img" />
            <h3>© 2020 Kasa. All right reserved</h3>
        </div>
    )
}

export default Footer
