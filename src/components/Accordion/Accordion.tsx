import React from 'react';

type ItemType = {
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue:string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void,
    items: ItemType[]
    onChange:(value:any)=> void
}

const Accordion = (props:AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={props.onClick}/>
            { props.collapsed && <AccordionBody items={props.items} onChange={props.onChange}/> }
        </div>
    );
};





type AccordionTitlePropsType = {
    title:string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void


}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return <h3 onClick={()=>props.onClick(!props.collapsed)}>-{props.title}-</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onChange:(value:any)=> void
}

const AccordionBody = (props:AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map( (i,index) => <li onClick={()=>{props.onChange(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
export default Accordion;

