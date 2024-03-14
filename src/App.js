import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
    changeColors();
  };

  const changeColors = () => {
    setColorIndex((colorIndex + 1) % colors.length);
    document.body.style.backgroundColor = colors[colorIndex + 1];
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box" className="text-center" style={{ backgroundColor: colors.wheat }}>
      <div id="text" style={{ color: colors[colorIndex] }}> <i className="fas fa-quote-left"></i> {quote}</div>
      <div id="author" style={{ color: colors[colorIndex] }}>- {author}</div>
      <button id="new-quote" onClick={handleClick} style={{ backgroundColor: colors[colorIndex], color: '#fff' }}>New Quote</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`} target="_blank" rel="noopener noreferrer" style={{ color: colors[colorIndex] }}>
         <i className="fab fa-twitter"></i> Tweet
      </a>
    </div>
  );
}

export default App;
