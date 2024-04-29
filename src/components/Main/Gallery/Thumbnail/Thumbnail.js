import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../Thumbnail/_thumbnail.scss';
import data from '../../../../datas/logements.json';

function Thumbnail() {
    const [thumbnails, setThumbnails] = useState([]);
    const alt ='photo du logement';
    const navigate = useNavigate();


    useEffect(() => {
      setThumbnails(data);
    }, []);

    const selectedCard = (id) => {
        navigate(`/accomodation/${id}`);
      };

    return (
        <div className="cards">
            {thumbnails.map(card => (
                <div className="card" key={card.id} onClick={() => selectedCard(card.id)}>
                    <img className="card-cover" src={card.cover} alt={alt} />
                    <h2 className="card-title">{card.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Thumbnail;
//---------------------------------------
// import React, { useState, useEffect } from 'react';
// import '../Thumbnail/_thumbnail.scss';
// import data from '../../../../datas/logements.json';

// function Thumbnail() {
//     const [thumbnails, setThumbnails] = useState([]);
//     const alt ='photo du logement';

//     useEffect(() => {
//       setThumbnails(data);
//     }, []);

//     return (
//         <div className="cards">
//             {thumbnails.map(card => (
//                 <div className="card" key={card.id}>
//                     <img className="card-cover" src={card.cover} alt={alt} />
//                     <h2 className="card-title">{card.title}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Thumbnail;