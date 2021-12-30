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
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
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
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p><b>{(text.split(/ \s + /).filter((element) => { return element.length !== 0 }).length)} words and {text.length} characters</b ></p>
                <p><b>{Math.round(0.008 * text.split(" ").length)} Minutes to read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
            </div>
        </>
    )
}

