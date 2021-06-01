import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Grey");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const changeToGrey = () => {
    setColor("grey");
    setText("B  lack");
  };

  const changeToBlack = () => {
    setColor("black");
    setText("Grey");
  };

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setAuthor(data.author);
      });
  }, [count]);

  return (
    <div className="app">
      <div className={`container ${color}`}>
        <h1>Counter with Hooks</h1>
        <p>You clicked {count} times</p>
        <div className="btns">
          <button onClick={() => setCount(count + 1)} className="btn">
            Click Me
          </button>
          <button
            onClick={() => {
              color === "black" ? changeToGrey() : changeToBlack();
            }}
            className="btn"
          >
            {`Change to ${text}`}
          </button>
          <button onClick={() => setCount(0)} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="quote">
        <h1>{content}</h1>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default App;
