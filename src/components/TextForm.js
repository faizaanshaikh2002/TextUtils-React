import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("OnChange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    // text = "Changing text", Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    )
}

