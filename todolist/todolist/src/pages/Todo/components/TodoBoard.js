import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(list){

    return (
        <React.Fragment>
            <h1>TodoList</h1>
            {list.list.map((item)=><TodoItem item={item}/>)}
        </React.Fragment>
    );
}


export default TodoBoard;