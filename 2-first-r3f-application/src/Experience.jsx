import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({OrbitControls})

export default function Experience()
{
    const boxRef = useRef()
    const sphereRef = useRef()
    const groupRef = useRef()

    const {camera , gl} = useThree()
    
    useFrame((state, deltaTime) => {
        boxRef.current.rotation.y += deltaTime
        boxRef.current.rotation.x += deltaTime
        
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 10
        // state.camera.position.z = Math.cos(angle) * 10
        // state.camera.lookAt(0,0,0)
    })
    
    return <>
        <orbitControls args={[camera, gl.domElement]}/>

        <directionalLight intensity={1.5} position={[-2,2,2]}/>
        <ambientLight intensity={0.3}/>

        <group ref={groupRef}>
            <mesh ref={sphereRef} position-x={1.5}>
                <sphereGeometry/>
                <meshStandardMaterial color="orange" wireframe={false} />
            </mesh>
            <mesh ref={boxRef} position-x={-1.5} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color="red" wireframe={false}/>
            </mesh>
        </group>
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-3}>
            <planeGeometry/>
            <meshStandardMaterial/>
        </mesh>
    </>

}

