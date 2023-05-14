import React from 'react'

export default function ConditionalRendering() {
    const age = 19;
    const greenClr = true;

    return (
        <div>
            <h2>conditional rendering</h2>
            {age >= 18 ? <p>over age</p> : <p>under age</p>}
            <h1 style={{ color: greenClr ? "green" : "red" }}>this is color</h1>
            {/* if greenClr is true make it green else if its false then make it red */}

            {greenClr && <p>its is green</p>}
            {/* if greenclr is true then show this */}
        </div>
    )
}

