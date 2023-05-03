import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function Experience()
{
    const boxRef = useRef()
    const sphereRef = useRef()

    const boxJump = () => 
    {
        boxRef.current.applyImpulse({x:0,y:1,z:0})
        boxRef.current.applyTorqueImpulse({
            x:Math.random(),
            y:Math.random(),
            z:Math.random()
        })
    }

    // const fixSphere = () =>
    // {
    //     sphereRef.current.type("fixed")
    // }

    return <>
        <Perf position="top-left"/>

        <OrbitControls makeDefault/>

        <directionalLight
            position={[1,2,3]}
            intensity={1.5}
        />

        <ambientLight intensity={0.2}/>

        <Physics
            gravity={[0,-9.81,0]}
        >

            <Debug/>

            <RigidBody colliders="ball" ref={sphereRef} type="fixed">
                <mesh
                    position={[0,10,0]}
                    // onClick={fixSphere}
                >
                    <sphereGeometry/>
                    <meshStandardMaterial color="orange"/>
                </mesh>
            </RigidBody>

            <RigidBody
                colliders="cuboid"
                ref={boxRef}
                gravityScale={1}
                restitution={0}
                friction={0}    
            >
                <mesh
                    position-y={3}
                    onClick={boxJump}
                >
                    <boxGeometry/>
                    <meshStandardMaterial color="skyblue"/>
                </mesh>
            </RigidBody>
            
            <RigidBody type="fixed">
                <mesh
                    scale={[100,1,100]}
                >
                    <boxGeometry/>
                    <meshStandardMaterial color="greenyellow"/>
                </mesh>
                
            </RigidBody>

        </Physics>

    </>
}