import React from 'react';
import { useState } from 'react';
import { login, logout } from '../Store';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username)

    return (
        <div>
            <input onChange={(e) => {
                setNewUsername(e.target.value);
            }} />
            <button onClick={() => dispatch(login({ username: newUsername }))}>login</button>
            <button onClick={() => dispatch(logout())}>logout</button>
            <h1>Current user: {username}</h1>
        </div>
    )
}
