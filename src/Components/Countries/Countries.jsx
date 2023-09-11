import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag,setVisitedFlags] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountries = country =>{
        console.log('i am visited')
        const newVisited=[...visitedCountries,country]
        setVisitedCountries(newVisited)
    }

    
    const handleFlag = (country)  => {
        const newFlag= [...visitedFlag,country]
        setVisitedFlags(newFlag)
    }








    return (
        <div>
            <h3>Countries{countries.length}</h3>
            <div>
        

                <h4>visited countries:{visitedCountries.length}</h4>
                <ol>
                    {
                        visitedCountries.map(name=><li>{name.name.common}</li>)
                    }
                </ol>
            </div>
            <div className="flag">
                    {visitedFlag.map(flag=> <img src="flag.flags.png"></img>)}
                </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3}country = {country} handleVisitedCountries = {handleVisitedCountries} handleFlag = {handleFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;