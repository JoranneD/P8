import React from 'react';
import '../Thumbnail/_thumbnail.scss';

function Thumbnail({ image, title }) {
  return (
    <div className="thumbnail">
      <img src={image} alt={title} />
      <h2 className="thumbnail_title">{title}</h2>
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