import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleFlag}) => {
    const{name,flags,population,area,cca3} = country;
    const [visited, setVisited] = useState(false)
    
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited? 'visited':'non'}`}>
            <h3 style={{color:visited?'red':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button> <br />
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={()=>handleFlag(country)}>Flags</button>
            {/* {visited && 'Im visited this countries'} */}
            {visited? 'Im visited this countries':'I want to visit'}
        </div>
    );
};

export default Country;