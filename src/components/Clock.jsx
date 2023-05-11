import { useState, useEffect } from "react";
import moment from "moment";
import "./Clock.css";


function Clock() {
    const [time, setTime] = useState("");
  
    useEffect(() => {
      setInterval(() => {
       
        setTime(moment().format("hh:mm:ss A"));
      }, 1000);
    });
  
    return (
      <div className="main-clock">
        <div className="clock">
          <h1 className="time">{time}</h1>
          <h2 className="date">{moment().format("dddd, MMMM D YYYY")}</h2>  
        </div>
   
      </div>
    );
  }

export default Clock
