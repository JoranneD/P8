import React, { useState, useEffect } from 'react';
import '../Thumbnail/_thumbnail.scss';
import data from '../../../../datas/logements.json';

function Thumbnail() {
    const [thumbnails, setThumbnails] = useState([]);
    const alt ='photo du logement';

    useEffect(() => {
      setThumbnails(data);
    }, []);

    return (
        <div className="cards">
            {thumbnails.map(card => (
                <div className="card" key={card.id}>
                    <img className="card-cover" src={card.cover} alt={alt} />
                    <h2 className="card-title">{card.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Thumbnail;



// import '../Thumbnail/_thumbnail.scss'

// function Thumbnail() {
//     const thumbnail_title = 'Titre de la location'

//     return  <div className='thumbnail'>
//                 {/* <img src={thumbnail_img} alt='kasa-thumbnail'></img> */}
//                 <h2 className='thumbnail_title'>{thumbnail_title}</h2>
//             </div> 
// }

// export default Thumbnail