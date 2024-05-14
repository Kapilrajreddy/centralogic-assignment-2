import React, { useState } from 'react'
import './index.css'

const ChangeInput = () => {

    const [text,setText] = useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }
    
  return (
    <div className="container">
      <div className="shadow">
        <input
          type="text"
          placeholder="Enter The Text To Display"
          value={text}
          onChange={handleChange}
          className="input-text"
        />
        <h1>
          Hello,<span>{text}</span>
        </h1>
      </div>
    </div>
  );
}

export default ChangeInput;
