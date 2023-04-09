import { useMatcapTexture,OrbitControls, Text3D, Center, Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState } from "react";

export default function Experience()
{
    const [ helloMatcapTexture ] = useMatcapTexture("2A4BA7_1B2D44_1F3768_233C81", 256)
    const [ donutMatcapTexture ] = useMatcapTexture("2B2B22_3C3C30_464538_121210", 256)
    
    const [torusGeometry, setTorusGeometry] = useState();

    return <>
 
    <OrbitControls makeDefault/>
    <Perf position="top-left"/>

    <torusGeometry ref={setTorusGeometry} args={[1,0.5,16,32]}/>


    <directionalLight castShadow position={[1,2,3]} shadow-normalBias={0.04}/>
    <ambientLight intensity={0.3}/>

            <Center>
                <Text3D
                    font={"./fonts/fredoka_one_regular.json"}
                    size={2}
                    curveSegments={0.5}
                    bevelEnabled
                    bevelThickness={0.3}
                    bevelSize={0.1}
                    >
                    Hello
                    <meshMatcapMaterial matcap={helloMatcapTexture}/>
                </Text3D>
            </Center>

            {[...Array(100)].map((value, index)=>
                <mesh
                    key={index}
                    geometry={torusGeometry}
                    position=
                    {[
                        (Math.random() - 0.5) * 15,   
                        (Math.random() - 0.5) * 15,   
                        (Math.random() - 0.5) * 15   
                    ]}
                    scale={0.2 + Math.random() * 0.2}
                    rotation=
                    {[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0
                    ]}
                >
                    <meshMatcapMaterial matcap={donutMatcapTexture}/>
                </mesh>
            )}   
    </>
}