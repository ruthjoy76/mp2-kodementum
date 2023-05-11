import "./Footer.css";
import { useState, useEffect } from "react";

function Footer() {
  const [quote, setQuote] = useState([]);

  const url = "https://api.quotable.io/random"; 

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      //using interval to change quote every 1 hour
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setQuote(data);
        })
        .catch((error) => console.log(error));

      intervalId = setTimeout(fetchData, 3600000);
    };

    fetchData();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [url]);

  return (
    <div className="footer">
      <h1 className="quote">“{quote.content}”</h1>
      <h2 className="author">♥ {quote.author} ♥</h2>
    </div>
  );
 
}

export default Footer
