import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from "./Select.module.css"

type ItemsType = {
    title: string,
    value: any

}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemsType[]
}

const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(true)
    const [hoveredItemsValue, setHoveredItemsValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = () => {
        setActive(!active)
    }
    const hoveredItems = props.items.find(i => i.value === hoveredItemsValue)
    useEffect(()=>{setHoveredItemsValue(props.value);} , [props.value])
    const onItemClick = (value: number) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemsValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={styles.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}>
            <span onClick={toggleItems} className={styles.main}>
                {selectedItem && selectedItem.title}
            </span>
                {active &&
                    <div
                        className={styles.items}
                    >
                        {props.items.map((i, index) => <div

                            onMouseEnter={() => setHoveredItemsValue(i.value)}
                            className={styles.item + " " + (hoveredItems === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        > {i.title} </div>)}
                    </div>
                }
            </div>
        </>
    );
};

export default Select;
