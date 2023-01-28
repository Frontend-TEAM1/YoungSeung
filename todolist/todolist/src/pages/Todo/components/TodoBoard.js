import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){

    return (
        <React.Fragment>
            <h1>TodoList</h1>
            {props.list.map((item)=><TodoItem item={item}/>)}
        </React.Fragment>
    );
}


export default TodoBoard;