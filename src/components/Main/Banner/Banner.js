import banner_img from '../../../assets/banner.png'
import '../Banner/Banner.scss'

function Banner() {
    const banner_title = `Chez vous, partout et ailleurs`;

    return  <div className='kasa-banner'>
                <img src={banner_img} alt='kasa-banner'></img>
                <h1>{banner_title}</h1>
            </div> 
}

export default Banner