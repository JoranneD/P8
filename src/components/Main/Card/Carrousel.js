import React from 'react';

function Carousel({ pictures }) {
  const alt = "photos du logement";

    return (
        <div className="carousel">
            {pictures.map((picture, index) => (
                <img key={index} src={picture} alt={alt} />
            ))}
        </div>
    );
}

export default Carousel;

//-----------------------------------
// import React, { useState } from 'react';
// import '../Carousel/_carousel.scss';

// function Carousel({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button className="carousel-control prev" onClick={goToPrevSlide}>
//         Previous
//       </button>
//       <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
//       <button className="carousel-control next" onClick={goToNextSlide}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default Carousel;