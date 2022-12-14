import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //to change the state of the any text we can use setText
  // setText('new text');
   
 
  const handleUpclick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")

    console.log("convert button is clicked");
  };
  const handleonchange = (event) => {
    console.log("on changed");
    setText(event.target.value);

  };
  const handleDownclick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("converted to lowercase","success")
  };
  const handleclearclick = () => {
    let newText2 = "";
    setText(newText2);
    props.showAlert("text is cleared","success")
  };

 const handleCopy=()=>{
  let text = document.getElementById("myBox");
  text.select();
  document.getSelection().removeAllRanges()
  navigator.clipboard.writeText(text.value);
  props.showAlert("text copied","success")
 }

  return (
    <>
      <div className="container" style={{marginTop:70 }}>
      <h1 style={{color:props.Mode==="light"?"#781313":"white" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor:props.Mode==="light"?"white":"#111941",
          color:props.Mode==="light"?"grey":"white"}}
            value={text}
            id="myBox"
            onChange={handleonchange}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-danger" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-warning mx-4" onClick={handleDownclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary " onClick={handleclearclick}>
          Clear
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleCopy}>
          Copy Text
        </button>
        
      </div>

      <div className="container my-3" >
        <h1  style={{color:props.Mode==="light"?"#111941":"white"}}>Your text summary</h1>

        <p style={{color:props.Mode==="light"?"green":"white"}}>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} charachter
        </p>
        <p style={{color:props.Mode==="light"?"blue":"white"}}>{0.2 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3 style={{color:props.Mode==="light"?"orange":"white"}}>Preview</h3>
        <p style={{color:props.Mode==="light"?"black":"white",backgroundColor:props.Mode==="light"?"white":"#111941"}}>{text.length>0?text:"Please Enter Something"}</p>
      </div>
    </>
  );
}
