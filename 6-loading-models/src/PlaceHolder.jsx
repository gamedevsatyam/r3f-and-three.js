export default function PlaceHolder()
{
    return <>
        <mesh position-y={0.5} scale={[2,3,2]}>
            <boxGeometry/>
            <meshStandardMaterial color="red" wireframe/>
        </mesh>
    </>
}