import {OrbitControls} from '@react-three/drei';
import {Perf} from 'r3f-perf'
import {
    Noise,
    Glitch,
    Vignette,
    EffectComposer,
    Bloom,
    DepthOfField
} from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";

export default function Experience()
{
    return <>
        <EffectComposer>
            <Vignette/>
            {/* <Glitch/> */}
            {/* <Noise
                blendFunction={BlendFunction.SOFT_LIGHT}
                premultiply
                opacity={1}
            /> */}
            {/* <Bloom/> */}
            {/* <DepthOfField
                focusDistance={0.025}
                focalLength={0.025}
                bokehScale={6}
            /> */}
        </EffectComposer>

        <Perf position='top-left'/>

        <OrbitControls/>

        <directionalLight
            position={[1,2,3]}
            intensity={1.5}
        />
        <ambientLight intensity={0.5}/>

        <mesh position-y={1}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh
            scale={10}
            rotation-x={-Math.PI * 0.5}
        >
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>
    </>
}