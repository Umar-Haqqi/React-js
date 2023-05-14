import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function GenerateExcuse() {
    const [generateExcuse, setGenerateExcuse] = useState("");

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
            (res) => {
                // console.log(excuse);
                setGenerateExcuse(res.data[0].excuse);
            }
        );
    };

    // useEffect(() => {
    //     fetchExcuse();
    // }, [])

    return (
        <>
            <h1>Generate an Excuse</h1>
            <button onClick={() => fetchExcuse('party')}>Party</button>
            <button onClick={() => fetchExcuse('family')}>Family</button>
            <button onClick={() => fetchExcuse('office')}>Office</button>

            <h3>{generateExcuse}</h3>
        </>
    )
}
