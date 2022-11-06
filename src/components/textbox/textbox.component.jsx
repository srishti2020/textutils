import { useState } from "react";

const TextBox = (props) => {
 
    const [text, setText] = useState("enter text here");
    const onClickUpperHandler = () => {
        setText(text.toUpperCase())
    }
    const onClickLowerHandler = () => {
        setText(text.toLowerCase())
    }
    const onClickClearHandler = () => {
        setText("")
    }
    const onClickTrimHandler = () => {
        let newText = text.replace(/\s+/g, ' ')
        setText(newText)
    }


    const onChangeHandler = (event) => {
        setText(event.target.value)
    }


    return (
        <div className={`mb-3 container mt-5 `}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label fs-1" style={{color: props.mode==="light"?"black":"white"}}>{props.text}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onChangeHandler} ></textarea>
            <button type="button" className="btn btn-info mt-3" onClick={onClickUpperHandler}>Convert to UpperCase</button>
            <button type="button" className="btn btn-info mt-3 mx-3" onClick={onClickLowerHandler}>Convert to LowerCase</button>
            <button type="button" className="btn btn-info mt-3" onClick={onClickClearHandler} >Clear Text</button>
            <button type="button" className="btn btn-info mt-3 mx-3" onClick={onClickTrimHandler}>Remove extra spaces</button>
            <h2 style={{color: props.mode==="light"?"black":"white"}}>Your Text Summary</h2>
            <p style={{color: props.mode==="light"?"black":"white"}}>{text.split(" ").length-1} words, {text.length} characters</p>
            <p style={{color: props.mode==="light"?"black":"white"}}>{text.length*0.032} seconds read</p>
            <h2 style={{color: props.mode==="light"?"black":"white"}}>Preview</h2>
            <p style={{color: props.mode==="light"?"black":"white"}}>{text?text:"enter text above to preview here"}</p>
        </div>
    )
}

export default TextBox;