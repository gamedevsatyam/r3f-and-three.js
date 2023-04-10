import "./style.css"
import ReactDOM  from "react-dom/client";
import {Canvas} from "@react-three/fiber"
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <>
        <Canvas
            camera=
            {{
                fov: 60,
                near:0.1,
                far:1000,
                position:[1,2,3]
            }}
        >
            <color args={["ivory"]} attach="background"/>
            <Experience/>
        </Canvas>
    </>
)
