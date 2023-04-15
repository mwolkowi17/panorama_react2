import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function StrzalkaDiferent(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./strzalka2.gltf')

  const [hovered, setHover] = useState(false)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material']}
        scale={hovered ? 1.5 : 1}
      />

      <mesh
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)} >
        <boxGeometry args={[4, 2, 4]} />
        <meshPhongMaterial color="#fffff" opacity={0.01} transparent
        />


      </mesh>

    </group>
  )
}

useGLTF.preload('./strzalka2.gltf')