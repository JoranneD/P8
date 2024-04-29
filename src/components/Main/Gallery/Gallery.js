// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import Card from '../Card/Card.js'
import Thumbnail from './Thumbnail/Thumbnail.js'
import '../Gallery/_gallery.scss'
// import data from '../../../datas/logements.json';


// function Gallery() {
//   const history = useHistory();

//   const selectedCard = (id) => {
//       history.push(`/card/${id}`);
//   };

//   return (
//       <section className='gallery'>
//           {data.map((card) => (
//               <Thumbnail key={card.id} card={card} onClick={() => selectedCard(card.id)} />
//           ))}
//       </section>
//   );
// }

// export default Gallery;



//////////////////////////////////////////////////////////
function Gallery() {
  return (
    <section className='gallery'>
      <Thumbnail />
    </section>
    );
}
  
export default Gallery;


//////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import Thumbnail from '../Gallery/Thumbnail/Thumbnail.js'
// import '../Gallery/_gallery.scss'
// import data from '../../../datas/logements.json';


// function Gallery() {
//     const [covers, setCovers] = useState([]);
  
//     useEffect(() => {
//         setCovers(data.map(card => card.cover));
//       }, []);
  
//     return (
//       <section className='gallery'>
//         <div className="thumbnails">
//           {covers.map(cover => (
//             <img key={cover} src={cover} alt="Cover" className="gallery-image" />
//           ))}
//         </div>
//           <Thumbnail />
//       </section>
//     );
//   }
  
// export default Gallery;
//////////////////////////////////////////////////////////
// import Thumbnail from '../Gallery/Thumbnail/Thumbnail.js'
// import '../Gallery/_gallery.scss'

// function Gallery() {

//     return  <section className='gallery'>
//                 <Thumbnail/>
//             </section> 
// }

// export default Gallery