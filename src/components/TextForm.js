import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text")

    const handleOnChange = (evnt) => {
        // console.log('handleOnChange');
        setText(evnt.target.value)
    }
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    return (
        <>
            <div className="container">
                <div className="mb-3 my-5">
                    <h2>{props.Heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button onClick={handleUpperClick} className="btn btn-primary my-3">Convert to uppercase</button>
                    <button onClick={handleLowerClick} className="btn btn-primary mx-2">Convert to lowercase</button>
                </div>
            </div>
        </>
    )
}
