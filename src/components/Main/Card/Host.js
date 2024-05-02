import React from 'react';

function Host({ name, picture }) {
    const alt ="photo de l'hôte: ";

    return (
        <div className="host">
            <p className="host-name">{name}</p>
            <img className="host-picture" src={picture} alt={alt+name} />
            
        </div>
    );
}

export default Host;
