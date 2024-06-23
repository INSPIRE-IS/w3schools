import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Car from './components/Car.js'

function Cars(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const [text, setText] = useState('Take the shot!');
  const [name, setName] = useState("");
  const [inputs, setInputs] = useState({});

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
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    alert(inputs);
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
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Garage  />);