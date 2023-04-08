import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva"
import { Perf } from "r3f-perf";
import FlightHelmet from "./FlightHelmet.jsx";
import { Suspense } from "react";
import PlaceHolder from "./PlaceHolder.jsx";
import Hamburger from "./Hamburger.jsx";
import Fox from "./Fox.jsx";


export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1,2,3]} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.3}/>

        <mesh receiveShadow scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow" resolution={512} />
        </mesh>

        <Suspense
            fallback={<PlaceHolder/>}
        >
            {/* <FlightHelmet/> */}
            <Hamburger scale={0.2}/>
            <Fox scale={0.01}/>
        </Suspense>

    </>
}

