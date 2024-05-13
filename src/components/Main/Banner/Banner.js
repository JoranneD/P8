import React from 'react';
import '../Banner/_banner.scss';

function Banner({ title, imgSrc, imgAlt, children, className }) {
    return (
        <section className={`kasa-banner ${className}`}>
            <img className='banner-img' src={imgSrc} alt={imgAlt} />
            <h1 className='banner-title'>{title}</h1>
            {children}
        </section>
    );
}

export default Banner;