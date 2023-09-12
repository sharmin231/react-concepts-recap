import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags =[flag]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>countries:{countries.length}</h3>
            <div>
            <h3>Visited Countries:</h3>
            <ol>
            {
               visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
        </div>
        <div>
            {visitedFlags.map(flag => <img src={flag}></img>)}
        </div>
            <div className="country-container">
            {
                countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
        </div>
        
        </div>
        
    );
};

export default Countries;