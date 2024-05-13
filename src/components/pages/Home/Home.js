import Header from '../../Header/Header.js'
import Main from '../../Main/Main.js'
import Banner from '../../Main/Banner/Banner.js'
import Gallery from '../../Main/Gallery/Gallery.js'
import Footer from '../../Footer/Footer.js'
import '../Home/_home.scss'
import banner_img from '../../../assets/banner.png'

function Home() {
    const banner_title = `Chez vous, partout et ailleurs`;
  
    return (
        <>
            <div id='root' className="home">
                <div className="content-wrapper home-wrapper">
                    <Header className="home-header"/>
                    <Main className="home-main">
                        <Banner className="home-banner"
                            title={banner_title}
                            imgSrc={banner_img}
                            imgAlt="kasa-banner"
                        />
                        <Gallery/>
                    </Main>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;