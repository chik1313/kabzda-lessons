import React, {useState} from 'react';


const UncontrolledOnOff = () => {
const [on , setOn] = useState(true);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"

    };
    const ledStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"

    };
    const onClicked = () => setOn(true);
    const offClicked = () => setOn(false);

    return (
        <div>
            <div onClick={onClicked} style={onStyle}>On</div>
            <div onClick={offClicked} style={offStyle}>Off</div>
            <div style={ledStyle}  ></div>
        </div>
    );
};

export default UncontrolledOnOff;
