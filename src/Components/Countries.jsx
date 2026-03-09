import React, { use, useState } from 'react';
import Country from './Country';

// Fetch Data load Section :
const promiseForFectch = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json())

const Countries = () => {
    const promiseBasicResult = use(promiseForFectch);
    const promiseFinalResult = promiseBasicResult.countries;

    // Mark visited country section :
    const [markVisit, setmarkVisit] = useState([])
    const handleMarkVisit = (newCountry) => {
        const newVisiteCountry = [...markVisit, newCountry]
        setmarkVisit(newVisiteCountry)
    }

    return (
        <>
            <b>Total Countries : </b> {promiseFinalResult.length} <br />

            {/* Mark Visited Section : */}
            <div className='mark-visited-parent-section'>
                <b>Total Visited Countries : </b> {markVisit.length}
                <div className='mark-visited-child-section'>
                    {
                        markVisit.map(desh => <ol>
                            <b>Name : </b> {desh.name.common} <br />
                            <b>Capital : </b> {desh.capital.capital} <br />
                            <b>Region : </b> {desh.region.region} <br />
                            <b>Area : </b> {desh.area.area} <br />
                            <b>Population : </b> {desh.population.population} <br />
                            <img src={desh.flags.flags.png} alt="" />
                        </ol>)
                    }
                </div>

            </div>
            <div className='each-country-grid-section'>
                {
                    promiseFinalResult.map(country => <Country country={country} handleMarkVisit={handleMarkVisit}></Country>)
                }
            </div>

        </>
    );
};

export default Countries;