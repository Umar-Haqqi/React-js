import React from 'react';
import { useSelector } from 'react-redux';

export default function Contact() {
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1>Contact: {username}</h1>
        </div>
    )
}
