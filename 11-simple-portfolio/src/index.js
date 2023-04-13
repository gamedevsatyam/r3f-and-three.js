import "./style.css"
import Experience from "./Experience.jsx"
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <Canvas
        camera=
        {{
            fov:60,
            near:0.1,
            far:1000,
            position:[-3,3,4 ]
        }}
    >
        <color args={["#695b5b"]} attach="background"/>
        <Experience/>
    </Canvas>
)
