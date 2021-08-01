/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./App.css"
const App = () =>{
    const[result,setResult]=useState("");
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    const handClick =(e)=>{
        console.log("Clicked");
       //console.log(e)
        setResult(result.concat(e.target.name));
    }
    const clear = ()=>{
        console.log("Cleared")
        setResult("");
    }
    const backslash =()=>{
        console.log("Backslashed")
        setResult(result.slice(0,result.length-1))
    }
    const calculate =()=>{
        console.log("calculating ...");
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error!!")
        }
        
    }
    return (
        <>
<div className="contaier">
    <from>
        <input type="text"value={result}/>
    </from>
    <div className="keyPad">
        <button className="highlight" onClick={clear}id= "clear">Clear</button>
        <button className="highlight" onClick={backslash} id="backslash">C</button>
        <button className="highlight" name="/" onClick={handClick}>&divide;</button>
        <button name="7" onClick={handClick}>7</button>
        <button name="8" onClick={handClick}>8</button>
        <button name="9" onClick={handClick}>9</button>
        <button className="highlight" name="*" onClick={handClick}>&times;</button>
        <button name="4" onClick={handClick}>4</button>
        <button name="5" onClick={handClick}>5</button>
        <button name="6" onClick={handClick}>6</button>
        <button className="highlight" name="-" onClick={handClick}>&ndash;</button>
        <button name="1" onClick={handClick}>1</button>
        <button name="2" onClick={handClick}>2</button>
        <button name="3"onClick={handClick}>3</button>
        <button className="highlight" name="+" onClick={handClick}>+</button>
        <button name="0"onClick={handClick}>0</button>
        <button  name="."onClick={handClick}>.</button>
        <button className="highlight" onClick={calculate}id ="result">result</button>
    </div>
    
</div>
<div>
    <h2> Hello! Their</h2>
    <h3> This is a simple Calculator Page its an open-source project</h3>
    <button onClick={() => openInNewTab('https://github.com/kaushik397/React-Calculator')}>View Git Repo</button>
</div>
        </>
    )
}

export default App;