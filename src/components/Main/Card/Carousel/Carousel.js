import React, { useState } from 'react';
import previousArrow from '../../../../assets/arrow-back-ios.svg';
import nextArrow from '../../../../assets/arrow-forward-ios.svg';
import '../Carousel/_carousel.scss';

function Carousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const alt = "photos du logement";

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
    };

    if (pictures.length <= 1) {
        return (
            <div className="carousel">
                <img className="carousel-img" src={pictures[0]} alt={alt} />
            </div>
        );
    }

    return (
        <div className="carousel">
            <button className="carousel-btn arrow arrow-left" onClick={prevSlide}><img src={previousArrow} alt="Précedent" /></button>
            <img className="carousel-img" src={pictures[currentSlide]} alt={alt} />
            <button className="carousel-btn arrow arrow-right" onClick={nextSlide}><img src={nextArrow} alt="Suivant" /></button>
        </div>
    );
}

export default Carousel;
//----------------------
// import React, { useState } from 'react';
// import previousArrow from '../../../../assets/arrow-back-ios.svg';
// import nextArrow from '../../../../assets/arrow-forward-ios.svg';
// import '../Carousel/_carousel.scss';

// function Carousel({ pictures }) {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const alt = "photos du logement";

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
//     };

//     return (
//         <div className="carousel">
//             <button className="carousel-btn arrow arrow-left" onClick={prevSlide}><img src={previousArrow} alt="Précedent" /></button>
//             <img className="carousel-img" src={pictures[currentSlide]} alt={alt} />
//             <button className="carousel-btn arrow arrow-right" onClick={nextSlide}><img src={nextArrow} alt="Suivant" /></button>
//         </div>
//     );
// }

// export default Carousel;

//----------------------------
// import React from 'react';

// function Carousel({ pictures }) {
//   const alt = "photos du logement";

//     return (
//         <div className="carousel">
//             {pictures.map((picture, index) => (
//                 <img key={index} src={picture} alt={alt} />
//             ))}
//         </div>
//     );
// }

// export default Carousel;

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