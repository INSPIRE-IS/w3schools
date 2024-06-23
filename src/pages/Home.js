import { useState } from "react";
import Todos from "../components/Todos";
import { useAuth } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
    const user = useAuth();
    console.log(user.user.name);
    const [count, setCount] = useState(0);
    //const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const todos = ["todo 1", "todo 2"];
  
    const increment = () => {
      setCount((c) => c + 1);
    };
//
    return (
      <>
      <h1 style={{backgroundColor: "lightblue", color: "red"}}>Home <Link to="/todos">Add</Link></h1>
        <h2>{`Hello ${user.user.name} again!`}</h2>
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