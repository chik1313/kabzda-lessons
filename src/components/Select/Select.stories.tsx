import React, {useState} from 'react';
import Select from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title:"Select",
    component: Select
}

export const WithValue = () => {
const [value,setValue] = useState("1")
    return <Select value={value} onChange={setValue} items={[
        {value:"1",title:"Kyiv"},
        {value:"2",title:"Odessa"},
        {value:"3",title:"Kharkiv"}
    ]}/>
}
export const WithoutValue = () => {
    const [value,setValue] = useState(null)
    return <Select value={value}  onChange={setValue} items={[
        {value:"1",title:"Kyiv"},
        {value:"2",title:"Odessa"},
        {value:"3",title:"Kharkiv"}
    ]}/>
}
