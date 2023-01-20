import React, { useState } from "react";
import TodoBoard from "./TodoBoard";


// 컴포넌트 함수의 앞글자는 무조건 대문자
function InputButton() {
    const [inputText, setInputText] = useState('');
    
    const change = (e)=>{
        setInputText(e.target.value);
    }
    

    const [list, setList] = useState([]);

    const add = () =>{
        setList([...list, inputText]);
    }

    return (
        <React.Fragment>
            <input value={inputText} type="text" onChange={change}/>
            <button onClick={add}>저장</button>
            <TodoBoard list={list}/>
        </React.Fragment>
    );
}

export default InputButton;