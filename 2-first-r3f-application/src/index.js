import './style.css'
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        // flat
        camera={{
            fov:90,
            far: 200,
            near:0.1,
            position:[3,2,6]}}
    >
        <Experience/>
    </Canvas>
)