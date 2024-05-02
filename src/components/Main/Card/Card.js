import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Carousel from './Carrousel';
import Host from './Host';
import Collapse from './Collapse';
import '../../Main/Card/_card.scss';
import data from '../../../datas/logements.json';


function Card() {
    const [selectedCard, setSelectedCard] = useState(null);
    const { id } = useParams(); // Extrait l'identifiant du logement de l'URL

    useEffect(() => {
        // Filtrer les données pour ne récupérer que les informations du logement correspondant à l'identifiant
        const foundCard = data.find(card => card.id === id);
        setSelectedCard(foundCard);
    }, [id]);

    // Vérifier si selectedCard est null, auquel cas afficher un message de chargement
    if (!selectedCard) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="card">
            {/* <Carousel pictures={selectedCard.pictures} /> */}
            <img className="card-cover-accomodation" src={selectedCard.cover} alt={selectedCard.title} />
            
            <div className="card-titles">
                <h1 className="card-title">{selectedCard.title}</h1>
                <p className="card-location">{selectedCard.location}</p>
            </div>
            
            <ul className="card-tags">
                {selectedCard.tags.map((tag, index) => (
                    <li className="card-tag" key={index}>{tag}</li>
                ))}
            </ul>

            <div className="card-host-details">
                <p className="card-rating">Rating: {selectedCard.rating}</p>
                <Host name ={selectedCard.host.name} picture={selectedCard.host.picture} />
            </div>
            
            <div className="card-details">
                <Collapse title="Description">
                    <p>{selectedCard.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {selectedCard.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
           </div>
        </div>
    );
}

export default Card;


//-----------------------------------------------------------
// import React from 'react';
// // import Carousel from './Carrousel';
// //import Host from './Host';
// import data from '../../../datas/logements.json';

// function Card({ title, cover, pictures, description, host, rating, location, equipments, tags }) {
//     return (
//         <div className="card">
//             <img className="card-cover" src={cover} alt="Cover" />
//             <h2 className="card-title">{title}</h2>
//             {/* <Carousel pictures={pictures} /> */}
//             <p>Description: {card.description}</p>
//             <p>Location: {location}</p>
//             <p>Rating: {rating}</p>
//             {/* <Host name={host.name} picture={host.picture} /> */}
//             <h3>Équipements:</h3>
//             {/* <ul>
//                 {equipments.map((equipment, index) => (
//                     <li key={index}>{equipment}</li>
//                 ))}
//             </ul> */}
//             <h3>Tags:</h3>
//             {/* <ul>
//                 {tags.map((tag, index) => (
//                     <li key={index}>{tag}</li>
//                 ))}
//             </ul> */}
//         </div>
//     );
// }

// export default Card;
//-----------------------------------------------------------
// import React from 'react';

// function Card({ accomodation }) {

//     return (
//         <div className="card">
//             <img className="card-cover" src={accomodation.cover} alt="Cover" />
//             <h2 className="card-title">{accomodation.title}</h2>
//             <p className="card-description">{accomodation.title}</p>
//         </div>
//     );
// }

// export default Card;
//-----------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../Card/_card.scss';
// import data from '../../../datas/logements.json';

// function Card() {
//     const [cards, setCards] = useState([]);
//     const {id} = useParams();
//     const [accommodation, setAccommodation] = useState(null);

//     useEffect(() => {
//         console.log("ID récupéré :", id); // Affichez l'ID récupéré à partir de l'URL
//         setCards(data);
//         const foundAccommodation = data.find(card => card.id === id);
//         console.log("Logement trouvé :", foundAccommodation); // Affichez le logement trouvé dans vos données
//         setAccommodation(foundAccommodation);
//     }, [id]);
    

//     if (!accommodation) {
//         return <div>Aucun logement trouvé pour cet ID.</div>;
//     }

//     return (
//         <div className="cards">
//             {cards.map(card => (
//                 <div className="card" key={card.id}>
//                     <img className="card-cover" src={card.cover} alt="Cover" />
//                     <h2 className="card-title">{card.title}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Card;
//-----------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import '../Card/_card.scss';
// import data from '../../../datas/logements.json';

// function Card() {
//     const [covers, setCovers] = useState([]);
  
//     useEffect(() => {
//         setCovers(data.map(card => card.cover));
//       }, []);
  
//     return (
//       <div className="cards">
//         {covers.map(cover => (
//           <img className="card-cover" key={cover} src={cover} alt="Cover" />
//         ))}
//       </div>
//     );
//   }
  
//   export default Card;
//-----------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import '../Card/_card.scss';
// import data from '../../../datas/logements.json';

// function Card({id}) {
//     const [cards, setCards] = useState([]);
//     const history = useHistory();


//     useEffect(() => {
//         setCards(data);
//     }, []);

//     const selectedCard = (cardId) => {
//         // Redirige l'utilisateur vers une nouvelle page en utilisant l'ID de la carte
//         history.push(`/card/${cardId}`);
//       };

//     return (
//         <div className="cards">
//             {cards.map(card => (
//                 <div className="card" key={card.id} onClick={() => selectedCard(card.id)}>
//                     <img className="card-cover" src={card.cover} alt="Cover" />
//                     <h2 className="card-title">{card.title}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Card;

//------------------------------------------------------------
// carousel
// tag
// rating
// landlord tag
// dropdown