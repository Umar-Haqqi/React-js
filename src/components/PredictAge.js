import React, { useState } from 'react';
import Axios from 'axios';

export default function PredictAge() {
    const [name, setName] = useState("");
    // const [predictedAge, setPredictedAge] = useState(null);
    // const [count, setCount] = useState(0);
    const [fetchPredictedData, setFetchPredictedData] = useState(null);

    const FetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                console.log(res.data);
                // setPredictedAge(res.data.age);
                // setCount(res.data.count);
                setFetchPredictedData(res.data);
            });
    };
    return (
        <div>
            <input placeholder="Ex. John" type="text" name="" id=""
                onChange={(event) => {
                    setName(event.target.value);
                }} />
            <button onClick={FetchData}>Predict Age</button>

            {/* 
            <h2>Predicted Age: {predictedAge}</h2>
            <h2>Count: {count}</h2> 
            */}

            {/* using ? to prevent code from breaking bcuz initially we declare var null */}
            <h2>Predicted Age: {fetchPredictedData?.age}</h2>
            <h2>Typed Name: {fetchPredictedData?.name}</h2>
            <h2>Total Count: {fetchPredictedData?.count}</h2>
        </div>
    )
}
