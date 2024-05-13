import React from 'react';
import Collapse from '../Card/Collapse/Collapse';
import '../../Main/Values/_values.scss';

function Values() {
    const text= "lorem ipsum";

    return (
        <section className="values">
            <Collapse title="Fiabilité">
                <p>{text}</p>
            </Collapse>
            <Collapse title="Respect">
                <p>{text}</p>
            </Collapse>
            <Collapse title="Service">
                <p>{text}</p>
            </Collapse>
            <Collapse title="Sécurité">
                <p>{text}</p>
            </Collapse>
        </section>
    );
}

export default Values;