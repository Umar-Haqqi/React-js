import React from 'react'
import style from '../css/main.module.css'

const myArr = ["a", "b", "c", "f", "g", 1, 2, 3];

const users = [
    { name: "umar", age: 21 },
    { name: "rohan", age: 20 },
    { name: "ali", age: 23 },
]

export default function Job(props) {
    return (
        <>
            {/* display array of object users */}
            {users.map((user, key) => {
                return <User name={user.name} age={user.age}/>  

                // return (
                    // <div>
                    //     {user.name}, {user.age}
                    // </div>)
            })}


            <span className={style.list}>
                {myArr.map((val, keyy) => {
                    return <h3 keyy={keyy}>{val}</h3>
                })}
            </span>
            <div className={style.job}>

                <h6>The salary is: {props.salary}$</h6>
                <h6>The year of experience is: {props.experience} years</h6>
                <h6>{props.postion}</h6>
            </div>
        </>
    )
}

// making a kind of component for user
const User = (props)=>{
    return (
        <div>
            {props.name}{props.age}
        </div>
    )
}
