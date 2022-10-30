import {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export default {
    title: "input"
}

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    const actualValue = e.currentTarget.value;
    setValue(actualValue)
}
    return <><input onChange={onChangeHandler}/> {value}</>;
}

export const ControlledInputWithFixedValue = () => <input value={'vladyslav'} />;

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value,setValue] = useState('')
    const InputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = InputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={InputRef}/>
    <button onClick={ save }>save</button> Current Value is : {value} </>
}

 export const ControlledInput = () => {
    const [parentValue , setParentValue ] = useState('')

     return <input value={parentValue} onChange={(e)=> {setParentValue(e.currentTarget.value)}}/>
 }

 export const ControlledCheckbox = () => {
    const [parentValue , setParentValue] = useState(true)
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
     }

     return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
 }

 export const ControlledSelected = () => {
    const [parentValue,setParentValue] = useState<string | undefined>("2")
     const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
     }
    return <select  value={parentValue} onChange={onChangeHandler}>
        <option>None</option>
        <option value={2}>Kyiv</option>
        <option value={3}>Kharkiv</option>
        <option value={4}>Donetsk</option>
    </select>
 }
