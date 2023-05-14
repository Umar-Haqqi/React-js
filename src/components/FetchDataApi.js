import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function FetchDataApi() {
    const [catFact, setCatFact] = useState("");
    
    const fetchCatFact = () => {
        console.log("clicked");
        // fetching data with axios
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    }
    // using useeffect to stop it running infinite and runs only once
    useEffect(() => {
        fetchCatFact();
    }, [])
    // the empty array will make it run only one time


    
    // fetching data normally
    // fetch("https://dummyjson.com/users")
    // .then((resp) => resp.json())
    // .then((data) => {console.log(data)
    // });
    return (
        <div>
            <button onClick={fetchCatFact}>Generate a Fact</button>
            <p>{catFact}</p>
        </div>
    )
}
