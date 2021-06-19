import React, {useState} from "react";
import "./App.css";
import Button from "./../Button/Button";
import InputNum from "./../InputNum/InputNum";
import * as math from "mathjs";

const App = () => {
    const buttonColor = "#000000";

    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    // Functions :

    const addToText = (val) => {
        setText((text) => [...text, val]);
    };

    const resetInput = () => {
        setText("");
        setResult("");
    };

    const calculateResult = () => {
        console.log(text);
        const input = text.join("");
        console.log(input);

        setResult(math.round(math.evaluate(input), 2));
    };

    return (
        <div className="app-container">
            <div className="calc-container">
                <InputNum text={text} result={result}></InputNum>
                <div className="row-container">
                    <Button symbol="7" handleClick={addToText} />
                    <Button symbol="8" handleClick={addToText} />
                    <Button symbol="9" handleClick={addToText} />
                    <Button
                        symbol="/"
                        color={buttonColor}
                        handleClick={addToText}
                    />
                </div>
                <div className="row-container">
                    <Button symbol="4" handleClick={addToText} />
                    <Button symbol="5" handleClick={addToText} />
                    <Button symbol="6" handleClick={addToText} />
                    <Button
                        symbol="*"
                        color={buttonColor}
                        handleClick={addToText}
                    />
                </div>
                <div className="row-container">
                    <Button symbol="1" handleClick={addToText} />
                    <Button symbol="2" handleClick={addToText} />
                    <Button symbol="3" handleClick={addToText} />
                    <Button
                        symbol="+"
                        color={buttonColor}
                        handleClick={addToText}
                    />
                </div>
                <div className="row-container">
                    <Button symbol="0" handleClick={addToText} />
                    <Button symbol="." handleClick={addToText} />
                    <Button symbol="=" handleClick={calculateResult} />
                    <Button
                        symbol="-"
                        color={buttonColor}
                        handleClick={addToText}
                    />
                </div>
                <Button
                    symbol="Clear"
                    color="#474668"
                    handleClick={resetInput}
                ></Button>
            </div>
        </div>
    );
};

export default App;
