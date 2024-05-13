import Header from '../../Header/Header.js'
import Main from '../../Main/Main.js'
import Banner from '../../Main/Banner/Banner.js'
import Values from '../../Main/Values/Values.js'
import Footer from '../../Footer/Footer.js'
import '../../pages/About/_about.scss'
import banner_img from '../../../assets/banner2.png'

function About() {
    const banner_title = '';

    return (
        <>
            <div id='root' className="about">
                <div className="content-wrapper about-wrapper">
                    <Header className="about-header"/>
                    <Main className="about-main">
                        <Banner className="about-banner"
                            title={banner_title}
                            imgSrc={banner_img}
                            imgAlt="kasa-banner"
                        />
                        <Values/>
                    </Main>
                </div>
                <Footer/>
            </div>
        </>
  );
}

export default About;