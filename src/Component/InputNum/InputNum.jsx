import React from "react";
import "./InputNum.css";

const InputNum = ({text, result}) => {
    return (
        <div className="input-container">
            <div className="result-div">
                <h1 className="result">{result}</h1>
            </div>
            <div className="text-div">
                <h3 className="text">{text}</h3>
            </div>
        </div>
    );
};

export default InputNum;
