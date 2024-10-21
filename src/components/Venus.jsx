/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: butcher.cnd (https://sketchfab.com/butcher.cnd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/planet-venus-0ee66cfcebd44c75aa88a57339250e94
Title: Planet Venus
*/

import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Venus = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/venus.glb")
  const { actions } = useAnimations(animations, group)

  useGSAP(() => {
    gsap.to(group.current.rotation, {
      y: "+=6.28319",
      repeat: -1,
      ease: "linear",
      duration: 60,
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={61.518}
        >
          <group name="Root">
            <group
              name="Camera"
              position={[48.908, -38.435, -0.002]}
              rotation={[1.572, 0.888, -0.154]}
              scale={4.287}
            />
            <group name="Ceres" scale={9.385}>
              <mesh
                name="Ceres_0"
                castShadow
                receiveShadow
                geometry={nodes.Ceres_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Point" position={[24.324, -3.709, 6.099]}>
              <group name="Point_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models/venus.glb")
export default Venus