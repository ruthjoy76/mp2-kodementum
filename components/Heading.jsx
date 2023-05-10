import "./Heading.css";
import { useState, useEffect } from "react";

function Heading() {
  const getName = localStorage.getItem("name")
    ? localStorage.getItem('name')
    : "Click to add name";

  const [name, setName] = useState(getName);
  const [condition, setCondition] = useState("");

  const handleClick = () => {
    const name = prompt("What is your name");
    localStorage.setItem("name", name === "" ? "Name" : name);
    const newName = localStorage.getItem("name");
    setName(newName);
  };

  useEffect(() => {
    let intervalId;

    const getDay = () => {
  
      if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
        setCondition("Morning");
      }
    
      else if  (new Date().getHours() >= 12 && new Date().getHours() <= 17) {
        setCondition("Afternoon");
      }
    
      else if (new Date().getHours() > 17 && new Date().getHours() <= 24) {
        setCondition("Evening");
      }
      
     
      intervalId = setTimeout(getDay, 3600000);
    };

    getDay();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [condition]);

  return (
    <div className="message">
      <h1 className="greetings">
        Good {condition}
        <span
          className="name"
          onClick={handleClick}
        >
          , {name}
        </span>
      </h1>
    </div>
  );
}


export default Heading

