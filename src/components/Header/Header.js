import logo from '../../assets/logo_kasa.png'
import '../Header/_header.scss'

function Header() {
    const link_name_1 = 'Acceuil'
    const link_url_1 = 'https://www.google.com/'
    const link_name_2 = 'À propos'
    const link_url_2 = 'https://www.google.com/'

    return  <header className='kasa-header'>
                <img src={logo} className='kasa-logo' alt='kasa-logo'/>
                <nav className='header-nav'>
                    <ul className='nav-list'>
                        <li><a className='nav-link' href={link_url_1}>{link_name_1}</a></li>
                        <li><a className='nav-link' href={link_url_2}>{link_name_2}</a></li>
                    </ul>
                </nav>
            </header> 
}

export default Header