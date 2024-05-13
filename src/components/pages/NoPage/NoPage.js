import Header from '../../Header/Header.js'
import Main from '../../Main/Main.js'
import Error404 from '../../Error/error404.js'
import Footer from '../../Footer/Footer.js'
import '../NoPage/_noPage.scss'

function NoPage() {
  return (
        <>
            <div id='root' className="noPage">
                <div className="content-wrapper noPage-wrapper">
                    <Header className="noPage-header"/>
                    <Main className="noPage-main">
                        <Error404/>
                    </Main>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default NoPage;