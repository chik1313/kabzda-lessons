import React, {useMemo, useState} from "react";

export default {
    title: "Usememo stories"
}

/*export const Example1 = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
        let fake = 0;
        while (fake < 10000000) {
            fake++;
            const randomValue = Math.random()
        }
            tempResultA = tempResultA * i;
    }
        return tempResultA;
    } ,[a])

        for (let i = 1; i <= b; i++) {
            resultB = resultB * i;
        }



    return <>
        <input value={a} onChange={(e) => setA(  +e.currentTarget.value)

        }/>
        <input value={b} onChange={(e) => setB((  Number(e.currentTarget.value)))

        }/>
        <hr/>
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>
    </>
}*/

  const NewMessageCounter = (props: { count:number })=> {
    return <div> {props.count} </div>
}

const SecretUsers = (props:{users:Array<string>}) => {
    console.log("USERS")
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)
        }
    </div>
}
const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
    const [counter , setCounter] = useState(0);
    const [users , setUsers] = useState(['Vladych','Natali','Romich','Alex'])
    const newArray = useMemo(
        ()=>{
            const newArray = users.filter(u=>u.toLowerCase().indexOf("a")>-1)
            return newArray
        },[users]
    )
    return <>
        <button onClick={()=>{setCounter(counter+1)}}> Plus </button>
        <NewMessageCounter count={counter}/>
        <Users users={newArray}/>
    </>
}
