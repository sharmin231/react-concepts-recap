

import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    
    const {name,flags,area,currencies,population} = country;
    const [visited,setVisited] = useState(false)
    const handleVisited = () =>{
    setVisited(!visited)
    }
    return (
        <div className={`country ${visited?'visited':'non'}`}>
            <h4 style={{color:visited && 'purple'}}>Name: {name?.common}</h4>
            <img src={flags?.png}></img>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
            <button onClick={handleVisited}>{visited?'Visited':'on going'}</button>
            <button onClick={()=>handleVisitedCountries(country)}>Mark visit</button>
            <button onClick={()=>handleVisitedFlags(flags.png)}>flags</button>
            {/* {visited && 'i have visite this country'} */}
            {visited? 'i have visite this country':'I will go'}
        </div>
    );
};

export default Country;