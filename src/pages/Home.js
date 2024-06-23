import { useState, useContext } from "react";
import Todos from "../components/Todos";
import { useAuth } from "../context/UserContext";

const Home = () => {
    const user11 = useAuth();
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };

    return (
      <>
      <h1 style={{backgroundColor: "lightblue", color: "red"}}>Home</h1>
      <h2>{`Hello ${user11} again!`}</h2>
        <Todos  todos={todos} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );


}

export default Home;