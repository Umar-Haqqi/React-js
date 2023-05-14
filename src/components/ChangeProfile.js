import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

export default function ChangeProfile() {
    const { setUsername } = useContext(AppContext)

    const [newUsername, setNewUsername] = useState("");
    return (
        <>
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }}
            />
            <button onClick={() => {
                // props.setUsername(newUsername)
                setUsername(newUsername)
            }}>Change username</button>
        </>
    )
}
