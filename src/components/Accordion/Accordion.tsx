import React from 'react';

type AccordionPropsType = {
    titleValue:string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void
}

const Accordion = (props:AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={props.onClick}/>
            { props.collapsed && <AccordionBody/> }
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


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion;

