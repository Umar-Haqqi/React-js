import React from 'react'

export default function List() {
    const nameArr = ["Ella", "Max", "Avery", "Leo", "Aria", "Finn", "Lila", "Sebastian", "Violet", "Landon"];

    const users = [
        { name: "John", age: 30 },
        { name: "Sarah", age: 25 },
        { name: "Michael", age: 45 },
        { name: "Emily", age: 27 },
        { name: "David", age: 32 },
        { name: "Jessica", age: 19 },
        { name: "Chris", age: 50 },
        { name: "Samantha", age: 23 },
        { name: "Alex", age: 29 },
        { name: "Rachel", age: 36 }
      ];

  return (
    <div>
        <h1>Array</h1>
        {nameArr.map((names,key)=>{
            return <p style={{textAlign: "center"}} key={key}>{names}</p>
        })}

        <br/><h1>Object</h1>
        {users.map((user, key)=>{
            return <h3 style={{textAlign: "center"}}>{user.name + " "}{user.age}</h3>
        })}
    </div>
  )
}
