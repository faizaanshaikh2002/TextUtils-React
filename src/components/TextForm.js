import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Content</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length - 1} wrods and {text.length}characters</b></p>
                <p><b>{Math.round(0.008 * text.split(" ").length)} Minutes to read</b></p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

