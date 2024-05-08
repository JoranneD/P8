import React from 'react';
import '../Main/_main.scss';

function Main({children, className}) {
    return (
        <main className={`kasa-main ${className}`}>
            {children}
        </main>
    );
}

export default Main


// import Banner from './Banner/Banner.js'
// import Gallery from './Gallery/Gallery.js'
// import '../Main/_main.scss'

// import Banner from './Banner/Banner.js'
// import Gallery from './Gallery/Gallery.js'
// import '../Main/_main.scss'

// function Main() {
//     return (
//         <div className="kasa-main">
//             <Banner/>
//             <Gallery/>
//         </div>
//     );
// }

// export default Main