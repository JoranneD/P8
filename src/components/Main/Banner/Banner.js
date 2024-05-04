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
//---------------------------
// import React from 'react';
// import '../Banner/_banner.scss';

// function Banner({ title, imgSrc, imgAlt, children }) {
//     return (
//         <section className='kasa-banner'>
//             <img className='banner-img' src={imgSrc} alt={imgAlt} />
//             <h1 className='banner-title'>{title}</h1>
//             {children}
//         </section>
//     );
// }

// export default Banner;
//-------------------------------------------
// import React from 'react';
// import '../Banner/_banner.scss';

// function Banner({ children }) {
//     return (
//         <section className='kasa-banner'>
//             {children}
//         </section>
//     );
// }

// export default Banner;
//-------------------------------------------
// import React from 'react';
// import '../Banner/_banner.scss';
// import bannerImg from '../../../assets/banner.png'

// function Banner({ title, imageUrl }) {
//     return (
//         <section className='kasa-banner'>
//             <img className='banner-img' src={imageUrl} alt='kasa-banner'></img>
//             <h1 className='banner-title'>{title}</h1>
//         </section>
//     );
// }

// export default Banner;
//------------------------------------------
// import banner_img from '../../../assets/banner.png'
// import '../Banner/_banner.scss'

// function Banner() {
//     const banner_title = `Chez vous, partout et ailleurs`;

//     return  <section className='kasa-banner'>
//                 <img className='banner-img' src={banner_img} alt='kasa-banner'></img>
//                 <h1 className='banner-title'>{banner_title}</h1>
//             </section> 
// }

// export default Banner