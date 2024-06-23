import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("child render");
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
    return (
      <>
        <h2 style={myStyle}>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };
  
  export default memo(Todos);
  