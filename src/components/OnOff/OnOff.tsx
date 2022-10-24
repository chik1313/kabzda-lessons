import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}

const OnOff = () => {
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

    return (
        <div>
            <div onClick={()=>setOn(true)} style={onStyle}>On</div>
            <div onClick={()=>setOn(false)} style={offStyle}>Off</div>
            <div style={ledStyle}  ></div>
        </div>
    );
};

export default OnOff;
