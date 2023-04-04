import { useEffect, useState } from "react";

export default function Clicker({increment, keyName, color})
{
    const [count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))


    useEffect(()=> {
        return()=> {
            localStorage.removeItem(keyName)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(keyName, count)
    },[count])

    const buttonClick = () => {
        setCount(count+1)
        increment()
    }

    return <div>
        <div style={{color}}>
            Clicks Count : { count} 
        </div>
        <button onClick={buttonClick}>
            Click Me !
        </button>
    </div>
}