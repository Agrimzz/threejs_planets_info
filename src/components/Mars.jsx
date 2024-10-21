/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AirStudios (https://sketchfab.com/sebbe613)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-5fc8b7168b044527a05ed3903c998b65
Title: Mars
*/
"use client"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Mars = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/mars.glb")

  useGSAP(() => {
    gsap.to(group.current.rotation, {
      y: "+=6.28319",
      repeat: -1,
      ease: "linear",
      duration: 60,
    })
  })
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere1_lambert3_0.geometry}
        material={materials.lambert3}
        scale={7.337}
      />
    </group>
  )
}

useGLTF.preload("/models/mars.glb")

export default Mars
