import "./style.css"
import ReactDOM from "react-dom/client"
import Experience from "./Experience.jsx"
import {Canvas} from "@react-three/fiber"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <>
        <Canvas
            flat
            camera={ {
                fov: 60,
                near: 0.1,
                far: 200,
                position: [ 1, 2, 6 ]
            } }
        >   
             <color args={['#201919']} attach="background"/>
            <Experience/>
        </Canvas>
    </>
)