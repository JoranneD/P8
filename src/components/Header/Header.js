import logo from '../../assets/logo_kasa.png'
//import '../styles/Header.css'

function Header() {
    const link_name_1 = 'Acceuil'
    const link_1 = 'https://www.google.com/'
    const link_name_2 = 'À propos'
    const link_2 = 'https://www.google.com/'

    return  <nav className='kasa-header'>
                <img src={logo} alt='kasa-logo'></img>
                <ul>
                    <li><a href={link_1}>{link_name_1}</a></li>
                    <li><a href={link_2}>{link_name_2}</a></li>
                </ul>
            </nav> 
}

export default Header