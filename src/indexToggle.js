import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
  const [text,setText] = useState('ON');
  const [toggler,setToggler] = useState(true);
  function handleClick(toggler) {
    // todo
    console.log('clicked');
    const newText = toggler?'ON':'OFF';
    setToggler(toggler)
    setText(newText);
  }
  
  return (
    <button onClick={()=>handleClick(!toggler)}>{text}</button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);