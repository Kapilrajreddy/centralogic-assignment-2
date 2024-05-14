import { useState } from "react";

const ChangeText=()=>{

    const [text, setText] = useState("ReactJS");
    const [color, setColor] = useState("#00b3b3");

    const onClickText = () => {

        if(text==="ReactJS"){
            setText("NodeJS");
        }
        if(text==="NodeJS"){
            setText("ReactJS");
        }

      
    };

    const onClickColor = () => {
        if (color === "#00b3b3") {
          setColor("#8b5cf6");
        }
        if(color==="#8b5cf6"){
            setColor("#00b3b3");
        }
    };

    return (
      <div className="container">
        <div className="shadow">
          <h1 className="heading">
            Learning <span style={{ color: color }}>{text}</span>
          </h1>
          <div>
            <button className="button" onClick={onClickColor}>
              Color
            </button>
            <button className="button" onClick={onClickText}>
              Text
            </button>
          </div>
        </div>
      </div>
    );
}
export default ChangeText