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
            <div className="carousel-counter">
                {currentSlide + 1} / {pictures.length}
            </div>
            <button className="carousel-btn arrow arrow-left" onClick={prevSlide}><img src={previousArrow} alt="Précedent" /></button>
            <img className="carousel-img" src={pictures[currentSlide]} alt={alt} />
            <button className="carousel-btn arrow arrow-right" onClick={nextSlide}><img src={nextArrow} alt="Suivant" /></button>
        </div>
    );
}

export default Carousel;