import { OrbitControls } from "@react-three/drei";
import {Sparkles, useGLTF, useTexture, Center, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import vertexShader from "./shaders/portal/vertex.js"
import fragmentShader from "./shaders/portal/fragment.js"
import * as THREE from "three";
import { useRef } from "react";

const PortalMaterial = shaderMaterial(
    {
        uTime:0,
        uColorStart: new THREE.Color("#ffffff"),
        uColorEnd: new THREE.Color("#000000")
    },
    vertexShader,
    fragmentShader
)

extend({PortalMaterial})

export default function Experience() {
    const {nodes} = useGLTF("./model/portal.glb")
    const bakedTexture = useTexture("./model/baked.jpg")
    bakedTexture.flipY = false

    const portalMat = useRef()

    useFrame((state, delta)=>{
        portalMat.current.uTime += delta
    })

    return <>
        <OrbitControls makeDefault/>

        <Center>
            <mesh
                geometry={nodes.baked.geometry}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            <mesh
                geometry={nodes.poleLightA.geometry}
                position={nodes.poleLightA.position}
            >
                <meshBasicMaterial color="#ffffe5"/>
            </mesh>

            <mesh
                geometry={nodes.poleLightB.geometry}
                position={nodes.poleLightB.position}
            >
                <meshBasicMaterial color="#ffffe5"/>
            </mesh>

            <mesh
                geometry={nodes.portalLight.geometry}
                position={nodes.portalLight.position}
                rotation={nodes.portalLight.rotation}
            >
                <portalMaterial ref={portalMat}/>
            </mesh>

            <Sparkles
                size={6}
                scale={[4,2,4]}
                position-y={1}  
                speed={0.2}
                count={50}  
            />
        </Center>
    </>
}