import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  
  
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState([]);

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  const API_KEY = "bc75fae98b1eb155fea6aabade06ddb8";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

  
  useEffect(() => {
    let intervalId = setTimeout(fetchData, 360000);

    async function fetchData() {
      //update weather every 1 hour
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setIcon(
            `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          );
        })
        .catch((error) => console.log(error));

    };

    fetchData();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [url]);

  return (
    <div className="weather-container">
      <div className="weathers">
      <img src={icon} alt="weather" /> 
      {weather.main ? <h1>{weather.main.temp} &#176;C</h1> : <h1>Loading</h1>}
      </div> 
      <h2 className="city-name">{weather.name}</h2>  
    </div>
  );
}

export default Navbar;