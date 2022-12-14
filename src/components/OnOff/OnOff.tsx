import React, {useState} from 'react';

type PropsType = {
     on: boolean,
    onClick:(on: boolean,)=> void
}

const OnOff = (props:PropsType) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red"

    };
    const ledStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"

    };

    return (
        <div>
            <div onClick={()=> {
                props.onClick(true)
            }} style={onStyle}>On</div>
            <div onClick={()=> {
                props.onClick(false)
            }} style={offStyle}>Off</div>
            <div style={ledStyle}  ></div>
        </div>
    );
};

export default OnOff;
