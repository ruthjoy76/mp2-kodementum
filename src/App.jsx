import "./App.css";
import { useState, useEffect } from "react";

import Weather from "./components/Weather";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import Heading from "./components/Heading";
import Clock from "./components/Clock";
import Logo from "./components/Logo";


function App() {
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      
      fetch('https://api.pexels.com/v1/search?query=nature&per_page=15', {
        headers: {
          Authorization: 'GM9fkJXrFqUYrMiORTKFaLe0Bl5qmXMZuNCIVN5wsntcDhvuzAsk0Csf',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const index = Math.floor(Math.random() * data.photos.length);
          setImage(data.photos[index].src.landscape);
        })
        .catch((error) => console.log(error));    
    }, []);
  

  return (
    <div className="App" style={{
      backgroundImage: image ? `url(${image})` : null,
    }}>
      <Logo />
      <Weather />
      <Clock />
      <Heading />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;