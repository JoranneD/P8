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
      <Header/>
      <Main>
        <Banner className="home-banner"
          title={banner_title}
          imgSrc={banner_img}
          imgAlt="kasa-banner"
        >
        </Banner>
        <Gallery/>
      </Main>
      <Footer/>
    </>
  );
}

export default Home;

//------------------------
// import Header from '../Header/Header.js'
// import Main from '../Main/Main.js'
// import Banner from '../Main/Banner/Banner.js'
// import Gallery from '../Main/Gallery/Gallery.js'
// import Footer from '../Footer/Footer.js'
// import '../Main/_main.scss'

// function Home() {
//   return (
//     <>
//       <Header/>
//       <Main>
//         <Banner/>
//         <Gallery/>
//       </Main>
//       <Footer/>
//     </>
//   );
// }

// export default Home;