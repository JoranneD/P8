import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
    // Convertir le rating en étoiles
    const stars = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon icon={faStar} className={index < rating ? 'star-full' : 'star-empty'}
        key={index} />
    ));

    return (
        <div className="rating">
            {stars}
        </div>
    );
}

export default Rating;
//-------------------------------------
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// function Rating({ rating }) {
//     const stars = [];

//     for (let i = 1; i <= rating; i++) {
//         stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-filled" />);
//     }

//     for (let i = rating + 1; i <= 5; i++) {
//         stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-empty"/>);
//     }

//     return (
//         <div className="card-rating">
//             {stars}
//         </div>
//     );
// }

// export default Rating;
//------------------------------------------
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


// function Rating({ rating }) {
//     // Convertir le rating en étoiles
//     const stars = Array.from({ length: 5 }, (_, index) => (
//         <FontAwesomeIcon icon={index < rating ? faStar : faStarRegular} key={index} />
//     ));

//     return (
//         <div className="card-rating">
//             {stars}
//         </div>
//     );
// }

// export default Rating;
//-----------------------------------------------
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// function Rating({ rating }) {
//     const stars = [];

//     for (let i = 1; i <= rating; i++) {
//         stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-filled" />);
//     }

//     for (let i = rating + 1; i <= 5; i++) {
//         stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
//     }

//     return (
//         <div className="card-rating">
//             {stars}
//         </div>
//     );
// }

// export default Rating;
//------------------------------------
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// function Rating({ rating }) {
//     // Convertir le rating en étoiles
//     const stars = Array.from({ length: rating }, (_, index) => (
//         <FontAwesomeIcon icon={faStar} key={index} />
//     ));

//     return (
//         <div className="card-rating">
//             {stars}
//         </div>
//     );
// }

// export default Rating;

