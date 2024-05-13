import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../../Header/Header.js'
import Main from '../../Main/Main.js'
import Card from '../../Main/Card/Card.js';
import Footer from '../../Footer/Footer.js'
import '../Accomodation/_accomodation.scss'
import data from '../../../datas/logements.json';

function Accomodation() {
    const { id } = useParams();

    const selectedAccomodation = data.find(card => card.id === id);

    if (!selectedAccomodation) {
      return <Navigate to="*" />;
    }

    return (
        <>
            <div id='root' className="accomodation">
                <div className="content-wrapper accomodation-wrapper">
                    <Header className="accomodation-header"/>
                    <Main className="accomodation-main">
                        <Card accomodation={selectedAccomodation} />
                    </Main>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Accomodation;