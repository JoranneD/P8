import thumbnail_img from '../../../assets/thumbnail.png'
//import '../styles/Header.css'

function Thumbnail() {
    const thumbnail_title = 'Titre de la location'

    return  <div className='thumbnail'>
                {/* <img src={thumbnail_img} alt='kasa-thumbnail'></img> */}
                <h2>{thumbnail_title}</h2>
            </div> 
}

export default Thumbnail