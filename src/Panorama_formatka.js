//import { TextureLoader } from 'three/src/loaders/TextureLoader'
//import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'


export function Panorama(props) {
    //const texture = useLoader(TextureLoader, props.filename)
    // miejsce gdzie mozna załadowac tekstury wczesiej
    return (
        <>
            <group>
                <mesh scale={[- 1, 1, 1]}>
                    <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                    {/* <meshStandardMaterial color='orange'/> */}
                    <meshBasicMaterial map={props.texture} side={THREE.BackSide} />
                </mesh>
            </group>
        </>
    )
}