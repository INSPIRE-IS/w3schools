import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Car from './components/Car.js'

function Cars(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {

  const [text, setText] = useState('Take the shot!');
  const carInfo = { name: "Ford", model: "Mustang" };
  const carlist = ['Ford', 'BMW', 'Audi'];

  const shoot = (a, b) => {
    alert(a);
    alert(b.type);
    const newText = a !== text? 'Taken':'Take the shot!';
    setText(newText);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }


  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand={ carInfo }/>
      <button onClick={(event) => shoot(text, event)}>{text}</button>
      <h1>Who lives in my garage?</h1>
      <ul>
        {carlist.map((car,index) => <Cars brand={car} key={index} />)}
      </ul>
      
    </>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Garage  />);