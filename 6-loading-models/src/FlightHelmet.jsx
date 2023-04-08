import { useGLTF, Clone } from "@react-three/drei";

export default function FlightHelmet()
{
    // const model = useLoader(
    //     GLTFLoader,
    //     // './FlightHelmet/glTF/FlightHelmet.gltf',
    //     "./hamburger.glb",
    //     (loader)=>
    //     {
    //         const dracoLoader = new DRACOLoader()
    //         dracoLoader.setDecoderPath('./draco/')
    //         loader.setDRACOLoader(dracoLoader)
    //     }
    // )

    
    const model = useGLTF("./hamburger-draco.glb")
    return <>
        <Clone object={model.scene} scale={0.5} position-x={3}/>
        <Clone object={model.scene} scale={0.5}/>
        <Clone object={model.scene} scale={0.5} position-x={-5}/>
    </>


}
useGLTF.preload("./hamburger-draco.glb")