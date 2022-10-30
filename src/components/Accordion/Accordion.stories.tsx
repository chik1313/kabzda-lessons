import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion
};
const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={'Menu'} collapsed={true} onClick={callback} items={[
        {title: "Vladych", value: "1"},
        {title: "Natali", value: "2"},
        {title: "Romich", value: "3"},
        {title: "Sanich", value: "4"},
        {title: "KalKalych", value: "5"}
    ]}
                      onChange={onClickCallback}/>
}
export const MenuUncollapsedMode = () => {
    return <Accordion titleValue={'Menu'} collapsed={false} onClick={callback} items={[
        {title: "Vladych", value: "1"},
        {title: "Natali", value: "2"},
        {title: "Romich", value: "3"},
        {title: "Sanich", value: "4"},
        {title: "KalKalych", value: "5"}
    ]}
                      onChange={onClickCallback}/>
}

export const ModeChanging = () => {
    const [change, setChange] = useState<boolean>(true)
    const onChangeHandler = () => {
        setChange(!change)
    }
    return <Accordion titleValue={'Menu'} collapsed={change} onClick={onChangeHandler} items={[
        {title: "Vladych", value: "1"},
        {title: "Natali", value: "2"},
        {title: "Romich", value: "3"},
        {title: "Sanich", value: "4"},
        {title: "KalKalych", value: "5"}
    ]}
                      onChange={(value) => {
                          alert(`User ID ${value} should be HAPPY`)
                      }}/>
}



