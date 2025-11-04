import React, { useState, useEffect } from "react";
import '../App.css';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1  className='intro' style={{ fontFamily: "monospace",  borderRight: "3px solid black", whiteSpace: "nowrap", overflow: "hidden" }}>
      {displayedText}
    </h1>
  );
};

export default Typewriter;
