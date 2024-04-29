import React from 'react';

function Host({ name, picture }) {
    const alt ="photo de l'hôte";

    return (
        <div className="host">
            <img src={picture} alt={alt} />
            <p>{name}</p>
        </div>
    );
}

export default Host;
