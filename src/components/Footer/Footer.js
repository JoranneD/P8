import logo from '../../assets/logo_kasa.png'
import '../Footer/_footer.scss'

function Footer() {
    const copyright = '© 2020 Kasa. All rights reserved'

    return  <footer className='kasa-footer'>
                <img src={logo} className='kasa-logo' alt='kasa-logo'></img>
                <p className='copyright'>{copyright}</p>
            </footer> 
}

export default Footer