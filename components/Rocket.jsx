import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Rocket(props) {
  const { nodes, materials } = useGLTF('/rocket.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['18499_Model_Rocket_with_Narrow_Top_v1_NEW'].geometry} material={nodes['18499_Model_Rocket_with_Narrow_Top_v1_NEW'].material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/rocket.glb')
