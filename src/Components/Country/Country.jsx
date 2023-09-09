import './Country.css'
const Country = ({country}) => {
    const{name,flags,population,area} = country;
    return (
        <div className='country'>
            <p>Name: {name?.common}</p>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            
        </div>
    );
};

export default Country;