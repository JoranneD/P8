import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
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