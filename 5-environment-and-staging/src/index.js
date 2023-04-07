import './style.css'
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from './Experience.jsx';
import { StrictMode } from 'react';
import { Leva } from 'leva';
import { Color } from 'three';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed/>
        <Canvas
            shadows
            // flat
            camera={{
                fov:90,
                far: 200,
                near:0.1,
                position:[0,1.5,10]}}
        >
            <color args={["ivory"]} attach="background"/>    
            <Experience/>
        </Canvas>
    </>

)