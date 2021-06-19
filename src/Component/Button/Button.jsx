import React from "react";
import "./Button.css";

const Button = ({symbol, color, handleClick}) => {
    return (
        <div
            onClick={() => handleClick(symbol)}
            className="button-container"
            style={{backgroundColor: color}}
        >
            {symbol}
        </div>
    );
};

export default Button;
