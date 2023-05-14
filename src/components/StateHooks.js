import React from 'react'
import { useState } from 'react';
import style from "../css/stateHooks.module.css";

export default function StateHooks() {
    const [age, setAge] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("green");

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        console.log(event.target.value)
    }

    const increaseAge = () => {
        //  setAge(5);
        setAge(age + 1);
        console.log(age)
    }

    const changeTextColor = ()=>{
        // setTextColor("red");
        setTextColor(textColor === "green" ? "purple" : "green")
    }

    // if want to render update to var use hook 
    // let age = 0;
    // const increaseAge = ()=>{
    //     // age = age +1    wrong
    //     console.log(age)
    // }

    return (
        <div className={style.stateHooks}>
            <div>
                <button onClick={increaseAge}>click to increase</button>
                {age}
            </div>


            <div>
                <input type="text" onChange={handleInputChange} />
                {inputValue}
            </div>


            <div>
                <button onClick={() => {
                    setShowText(!showText)
                }}>Show / Hide</button>
                {showText && <h2>My name is Umer</h2>}

                <br/><h1 style={{color:textColor}} onClick={changeTextColor}>Change color</h1>
            </div>

        </div>
    )
}
