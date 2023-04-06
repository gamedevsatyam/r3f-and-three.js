import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva"
import { Perf } from "r3f-perf";

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
    // console.log({cubePosition});

    const {PerfVisible} = useControls("Perf", {
        PerfVisible: false
    })

    return <>

        {PerfVisible ? <Perf position="top-left" /> : null}

        <OrbitControls makeDefault/>

        <directionalLight intensity={1.5} position={[-2,2,2]}/>
        <ambientLight intensity={0.3}/>

        <mesh position-x={4}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange" wireframe={false} />
        </mesh>

        <mesh position-x={-4} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple" wireframe={false}/>
        </mesh>
        
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow" resolution={512}/>
        </mesh>

        <mesh position={[Position.x, Position.y, 0]} visible={Visible}>
            <torusKnotGeometry/>
            <meshStandardMaterial color={Color} resolution={512}/>
        </mesh>
    </>

}

