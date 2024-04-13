import banner_img from '../../../assets/banner.png'
import '../Banner/_banner.scss'

function Banner() {
    const banner_title = `Chez vous, partout et ailleurs`;

    return  <section className='kasa-banner'>
                <img className='banner-img' src={banner_img} alt='kasa-banner'></img>
                <h1 className='banner-title'>{banner_title}</h1>
            </section> 
}

export default Banner