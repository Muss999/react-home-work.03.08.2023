import { useState } from "react";
const Counter = () => {
    let styleBtn = {
        margin: "20px",
        borderRadius: "10px",
        border: "3px solid darkblue",
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
    };
    let styleH1 = {
        textAlign: "center",
    };
    let styleDiv = {
        display: "flex",
        justifyContent: "center",
    };
    let [countNum, setCountNum] = useState(0);
    return (
        <>
            <h1 style={styleH1}>{countNum}</h1>
            <div style={styleDiv}>
                <button
                    className="plusMInusBtns"
                    style={styleBtn}
                    onClick={() => {
                        console.log(countNum);
                        setCountNum(countNum--);
                    }}
                >
                    -
                </button>
                <button
                    className="plusMInusBtns"
                    style={styleBtn}
                    onClick={() => {
                        console.log(countNum);
                        setCountNum(countNum++);
                    }}
                >
                    +
                </button>
            </div>
        </>
    );
};
export default Counter;
