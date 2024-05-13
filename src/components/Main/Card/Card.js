import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import Host from './Host/Host';
import Rating from './Rating/Rating';
import Collapse from './Collapse/Collapse';
import '../../Main/Card/_card.scss';
import data from '../../../datas/logements.json';


function Card() {
    const [selectedCard, setSelectedCard] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const foundCard = data.find(card => card.id === id);
        setSelectedCard(foundCard);
    }, [id]);

    if (!selectedCard) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="card">
            <Carousel pictures={selectedCard.pictures} />

            <div className="card-titles">
                <h1 className="card-title">{selectedCard.title}</h1>
                <p className="card-location">{selectedCard.location}</p>
            </div>
            
            <ul className="card-tags">
                {selectedCard.tags.map((tag, index) => (
                    <li className="card-tag" key={index}>{tag}</li>
                ))}
            </ul>

            <div className="card-host-details">
                <Rating rating={selectedCard.rating} />
                <Host name ={selectedCard.host.name} picture={selectedCard.host.picture} />
            </div>
            
            <div className="card-details">
                <Collapse title="Description">
                    <p>{selectedCard.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {selectedCard.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
           </div>
        </div>
    );
}

export default Card;