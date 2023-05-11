import { useState, useEffect } from "react";

function FontColor() {
  const [bgColor, setBgColor] = useState('#ffffff');

  // Update background color randomly
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setBgColor(randomColor);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate text color based on background color
  const getTextColor = (color) => {
    const threshold = 105; // Adjust threshold to your liking
    const red = parseInt(color.substring(1, 3), 16);
    const green = parseInt(color.substring(3, 5), 16);
    const blue = parseInt(color.substring(5, 7), 16);
    const grayscale = (red * 0.299) + (green * 0.587) + (blue * 0.114);
    return (grayscale > threshold) ? '#000000' : '#ffffff';
  }

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1 className="title" style={{ color: getTextColor(bgColor) }}></h1>
    </div>
  );
}


export default FontColor
