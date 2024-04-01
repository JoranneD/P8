import Banner from './Banner/Banner.js'
import Gallery from './Gallery/Gallery.js'
import '../Main/Main.scss'

function Main() {
    return (
        <div className="kasa-main">
            <Banner/>
            <Gallery/>
        </div>
    );
}


export default Main