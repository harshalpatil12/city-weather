import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp = () => {
  const[city, setCity] = useState(null);
  const[search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async()=> {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e397d8fd69d748030dbeb201e0a2c393`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    } 
     
    fetchapi();
  }, [search])

  return (
  <>
  <br />
  <br />
  <br />
  <div className='box'>
      <div className='inputData'>
        <input type= "search"
        value={search}
        className="inputField"
        onChange={(event)=>{
          setSearch(event.target.value)
        }}/>
      </div>
      {!city ? (
        <p>Data not Found</p>
      ) : (
      <div>
        <div className='info'>
        <h2 className='location'>
        <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>
            {city.temp}°
        </h1>
        <h3 className='tempmin_max'> 
        Min : {city.temp_min}°cel | Max : {city.temp_max}°cel
        </h3>
    
      </div>
      
      <div className='wave1'></div>
      <div className='wave2'></div>
      <div className='wave3'></div>
      </div>
       
      )}
      </div>
  </>
  
  )
}

export default Tempapp;
