import "./App.css";
import { useState, useEffect } from "react";
import moment from "moment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Todo from "../components/Todo";
import Heading from "../components/Heading";


function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
     
      setTime(moment().format("hh:mm:ss A"));
    }, 1000);
  });

  return (
    <div className="App">
      <Navbar />
      <div className="clock">
        <h1 className="time">{time}</h1>
        <h2 className="date">{moment().format("dddd, MMMM D YYYY")}</h2>
      </div>

      <Heading />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;