import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Successfully cleared content", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(37, 40, 44)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Content</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Content</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p><b>{(text.split(" ").filter((element) => { return element.length !== 0 }).length)} words and {text.length} characters</b></p>
                <p><b>{Math.round(0.008 * text.split(" ").length)} Minutes to read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to preview here"}</p>
            </div>
        </>
    )
}

