import { useState } from "react";

const Input = () => {
    const [text, setText] = useState("");
    let stylesInput = {
        width: "200px",
        height: "40px",
        background: "transparent",
        border: "4px solid #2874A6",
        borderRadius: "20px",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
    };
    let stylesP = {
        fontSize: "30px",
    };
    return (
        <>
            <p style={stylesP}>{text}</p>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter some text!!!"
                style={stylesInput}
            />
        </>
    );
};
export default Input;
