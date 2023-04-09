import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience()
{
    const boxRef = useRef()

    useFrame((state, delta)=>
    {
        boxRef.current.rotation.y += delta * 0.2
    })
    
    const eventHandler = () =>
    {
        console.log(boxRef);
        boxRef.current.material.color.set("red")
    }

    return <>

        <OrbitControls makeDefault/>

        <directionalLight
            position={[1,2,3]}
            intensity={1.5}
        />
        <ambientLight intensity={0.5}/>

        <mesh
            position={[2,1,0]}
            scale={1.5}
            ref={boxRef}
            onClick={eventHandler }
            onPointerEnter={()=>{document.body.style.cursor="pointer"}}
            onPointerLeave={()=>{document.body.style.cursor="default"}}
        >
            <boxGeometry/>
            <meshStandardMaterial color="orange"/>
        </mesh>

        <mesh 
            position={[-2,1,0]}
            onClick={(event) => event.stopPropagation()}
            onPointerEnter={(event) => event.stopPropagation()}
        >
            <sphereGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh
            rotation-x={-Math.PI * 0.5}
            scale={10}
        >
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>
    </>
}