import React, { useState } from 'react';

const Country = ({ country, handleMarkVisit }) => {
    const { name, capital, region, area, population, flags } = country;

    // Toggle Button Section : 
    const [visitedCountry, setVisitedCountry] = useState(false);
    const handleToggleButton = () => {
        setVisitedCountry(!visitedCountry)
    }

    return (
        <>
            <div className={`each-country-details-design ${visitedCountry && "visted-nonVisited-background"}`}>
                <b>Name : </b> {name.common} <br />
                <b>Capital : </b> {capital.capital} <br />
                <b>Region : </b> {region.region} <br />
                <b>Area : </b> {area.area} <br />
                <b>Population : </b> {population.population} <br />
                <img src={flags.flags.png} alt="" /><br /><br />

                {/* Button Section : */}
                {/* Visited and Not Visited Toggle Button : */}
                <button onClick={handleToggleButton}>{visitedCountry ? "Visited" : "Not Visited"}</button> <br /><br />

                {/* Mark As Visit Country Section : */}
                <button onClick={() => { handleMarkVisit(country) }}>Mark As Visit</button>
            </div>
        </>
    );
};

export default Country;