import React, { useState, useEffect } from 'react'

export function Text() {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("component is mounted");

        return () => {
            console.log("component UnMounted");
        }
    }, [])
    return (
        <>
            <input onChange={(event) => {
                setText(event.target.value);
            }} />

            <h1>{text}</h1>
        </>
    )
}
