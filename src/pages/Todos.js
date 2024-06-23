import { Link } from 'react-router-dom';
import styles from '../css/my-style.module.css'; 
import { useState } from 'react';

const Todos = () => {
    
    const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});
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
    return(
        <>
            <h1 className={styles.bigblue}>Add <Link to="/">Cancel</Link></h1>
            <form onSubmit={handleSubmit} style={{background:'#0095ffad',marginLeft:'20%',padding:50, width:'60%',alignItems:'center',justifyContent:'center'}}>
                <p >
                <label >Enter your name:
                <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
                </p>
                <p>
                <label>Enter your todo:
                <input 
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                />
                </label>
                </p>
                <p>
                <label>Enter your age:
                <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
                />
                </label>
                </p>
                <p>
                <input type="submit" />
                </p>
            </form>

        </>
    )
}

export default Todos;