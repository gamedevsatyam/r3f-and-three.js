import { useEffect, useState, useRef } from "react";

export default function Clicker({increment, keyName, color})
{
    const [count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()

    useEffect(()=> {
        buttonRef.current.style.color="red"
        buttonRef.current.style.backgroundColor="black"
        buttonRef.current.style.borderRadius="5px"
        buttonRef.current.style.fontWeight="900"
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
        <button ref={buttonRef} onClick={buttonClick}>
            Click Me !
        </button>
    </div>
}