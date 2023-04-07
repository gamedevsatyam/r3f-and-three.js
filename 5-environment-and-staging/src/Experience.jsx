import { OrbitControls, useHelper, BakeShadows, softShadows } from "@react-three/drei";
import { useControls, button } from "leva"
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"

// softShadows({
//     frustum:3.75,
//     size:0.005,
//     near:9.5,
//     samples:17,
//     rings:11,
// })

export default function Experience()
{
    const {Position, Color, Visible} = useControls("KnotGeometry",{
        Position:
        {
            value:{x:0,y:0},
            min:-10,
            max:10,
            step:0.1,
            joystick:"invertY"
        },
        Color:"#ff0000",
        Visible:false,
        IDoNothing: button(()=> {}),
        Dropdown: {options:["I","Me","You"]}
    })

    const {PerfVisible} = useControls("Perf", {
        PerfVisible: true
    })

    const boxRef = useRef()
    const lightRef = useRef()

    useFrame((state, deltaTime)=> {
        boxRef.current.rotation.y += deltaTime 
    })

    useHelper(lightRef, THREE.DirectionalLightHelper,1)

    return <>
        <BakeShadows/>

        {PerfVisible ? <Perf position="top-left" /> : null}

        <OrbitControls makeDefault/>

        <directionalLight
            ref={lightRef}
            intensity={1.5}
            position={[0,2,2]}
            castShadow
            shadow-mapSize={[1024,1024]}/>
        <ambientLight intensity={0.3}/>

        <mesh castShadow position-x={2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange" wireframe={false} />
        </mesh>

        <mesh ref={boxRef} position-x={-2} scale={1.5} castShadow>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple" wireframe={false}/>
        </mesh>
        
        <mesh receiveShadow scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow" resolution={512}/>
        </mesh>

        <mesh position={[Position.x, Position.y, 0]} visible={Visible}>
            <torusKnotGeometry/>
            <meshStandardMaterial color={Color} resolution={512}/>
        </mesh>
    </>

}

