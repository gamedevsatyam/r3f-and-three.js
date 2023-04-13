import { 
    useGLTF,
    PresentationControls,
    Environment,
    Float,
    ContactShadows,
    Html,
    Text
} from "@react-three/drei"; 


export default function Experience()
{
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")

    return <>
        <Environment preset="city"/>
        <PresentationControls 
            global
            polar={[-0.4,0.2]}
            azimuth={[-1,0.75]}
            config={{mass:2, tension:400}}
            snap={{mass:4, tension:400}}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.5}
                    intensity={65}
                    color="#ff6900"
                    rotation={[0.1,Math.PI,0]}
                    position={[0,0.55,-1.15]}
                />

                <Text
                    font="./SigmarOne-Regular.ttf"
                    fontSize={0.5}
                    color="#ff6900"
                    position={[0,0,1.2]}
                    rotation-x={-1.25}
                >
                    vSatyam
                </Text>

                <primitive
                    object={computer.scene}
                    position-y={-1.2}    
                >
                    <Html
                        wrapperClass="test"
                        transform
                        distanceFactor={1.16}
                        position={[0,1.55,-1.4]}
                        rotation-x={-0.25}
                    >
                        <iframe src="https://bruno-simon.com/html/" />
                    </Html>
                </primitive>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={4}
            blur={2.4}
        />
    </>
}