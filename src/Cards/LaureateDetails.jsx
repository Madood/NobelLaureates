import React from 'react';
import { useParams } from 'react-router-dom';
import laureatesData from '../Laureates-Json';
import "../Styles/Style.css";

function LaureateDetails() {
        const { id } = useParams();
        const laureate = laureatesData.find((l) => l.id === id);

        if (!laureate) {
                return <div>Laureate not found</div>;
        }

        return (
                <div className='laureateDetails'>
                        <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
                        <p>
                                <strong>Born:</strong> {laureate.born}
                        </p>
                        <p>
                                <strong>Country:</strong> {laureate.bornCountry}
                        </p>
                        <p>
                                <strong>Died:</strong> {laureate.died}
                        </p>
                        <p>
                                <strong>Gender:</strong> {laureate.gender}
                        </p>
                        <p>
                                <strong>Category:</strong> {laureate.category}
                        </p>
                        <p>
                                <strong>Motivation:</strong> {laureate.motivation}
                        </p>
                        <h3>Alma Mater</h3>
                        <p>
                                <strong>Name:</strong> {laureate.affiliations[0].name}
                        </p>
                        <p>
                                <strong>City:</strong> {laureate.affiliations[0].city}
                        </p>
                        <p>
                                <strong>Country:</strong> {laureate.affiliations[0].country}
                        </p>
                </div>
        );
}

export default LaureateDetails;
