import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Banner from '../Main/Banner/Banner.js'
import Gallery from '../Main/Gallery/Gallery.js'
import Footer from '../Footer/Footer.js'
import '../Main/_main.scss'

function Home() {
  return (
    <>
      <Header/>
      <Main>
        <Banner/>
        <Gallery/>
      </Main>
      <Footer/>
    </>
  );
}

export default Home;

// import Header from '../Header/Header.js'
// import Main from '../Main/Main.js'
// import Footer from '../Footer/Footer.js'

// function Home() {
//   return (
//     <>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </>
//   );
// }

// export default Home;