import {MeshReflectorMaterial, Float, Text, Html, OrbitControls, TransformControls, PivotControls } from "@react-three/drei";
import { useRef } from "react";


export default function Experience()
{
    const sphereRef = useRef()
    const boxRef = useRef()

    return <>
        <OrbitControls makeDefault/>

        <directionalLight intensity={1.5} position={[-2,2,2]}/>
        <ambientLight intensity={0.3}/>

        <mesh ref={sphereRef} position-x={2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange" wireframe={false} />
            <Html 
                center
                wrapperClass="label"
                distanceFactor={10}
                occlude={[boxRef]}
            >
                Sphere
            </Html>
        </mesh>
        {/* <TransformControls object={sphereRef}/> */}
        
        {/* <PivotControls anchor={[0,0,0]} depthTest={false} lineWidth={2} scale={50} fixed={true}> */}
            <mesh ref={boxRef} position-x={-2} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color="mediumpurple" wireframe={false}/>
            </mesh>
        {/* </PivotControls> */}
        
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry/>
            {/* <meshStandardMaterial color="greenyellow"/> */}
            <MeshReflectorMaterial color="greenyellow" resolution={512}/>
        </mesh>

        <Float floatIntensity={2}>
            <Text
                font="./wolland.regular.ttf"
                fontSize={2}
                color="salmon"
                position={[0,2,0]}
                
            >
                Hi this is Me
            </Text>
        </Float>
    </>

}

