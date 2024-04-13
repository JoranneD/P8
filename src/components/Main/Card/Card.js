import React, { useState, useEffect } from 'react';
import '../Card/_card.scss';
import data from '../../../datas/logements.json';

function Card() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data);
    }, []);

    return (
        <div className="cards">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <img className="card-cover" src={card.cover} alt="Cover" />
                    <h2 className="card-title">{card.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Card;


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

// carousel
// tag
// rating
// landlord tag
// dropdown