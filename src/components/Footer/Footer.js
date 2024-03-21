import logo from '../../assets/logo_kasa.png'
//import '../styles/Header.css'

function Footer() {
    const copyright = '© 2020 Kasa. All rights reserved'

    return  <div className='kasa-footer'>
                <img src={logo} alt='kasa-logo'></img>
                <p>{copyright}</p>
            </div> 
}

export default Footer