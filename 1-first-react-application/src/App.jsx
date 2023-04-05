import Clicker from './Clicker.jsx'
import People from './People.jsx'
import { useState, useMemo } from 'react'

export default function App({ clickersCount, children }) {
    const [hasClicker, setHasClicker] = useState(true)
    const [clickCount, setclickCount] = useState(0)

    const toggleClicker = () => {
        setHasClicker(!hasClicker)
    }

    const increment = () => {
        setclickCount(clickCount + 1)
    }

    const colors = useMemo(()=> {
        const colors = []

        for (let i = 0; i < clickersCount; i++) {
            colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`);
        }

        return colors

    },[hasClicker])



    return <>
        {children}

        <div>Total Count : {clickCount} </div>

        <button onClick={toggleClicker}>{hasClicker ? "Hide" : "Show"} Clicker</button>
        {hasClicker && <>
            {[...Array(clickersCount)].map((value, index) => {
                return <Clicker
                    key={index}
                    increment={increment}
                    keyName={`Count${index}`}
                    color={colors[index]} />
            })}
        </>}

        <People />
    </>
}