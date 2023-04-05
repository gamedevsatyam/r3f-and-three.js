import { useState } from "react"

export default function People() {
    const [people, setPeople] = useState([
        {id:1, name:"satyam"},
        {id:2, name:"hi"},
        {id:3, name:"bye"},
        {id:4, name:"helo"}
    ])

    return <div>
        <h2>People</h2>
        <ul>
        {people.map((value) => {
            return <li key={value.id}>{value.name}</li>
        })}
        </ul>
    </div>
}