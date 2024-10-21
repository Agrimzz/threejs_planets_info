"use client"
import Earth from "@/components/Earth"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="p-8 flex items-center gap-8">
        <div className="border-t border-white w-full" />
        <h2 className="text-center text-white text-5xl font-bold">
          Planets in Solar System
        </h2>
        <div className="border-t border-white w-full" />
      </div>

      <div className="w-full h-full  absolute inset-0">
        <Canvas className="w-full h-full">
          <perspectiveCamera makeDefault position={[0, 0, 20]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Earth scale={10} position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
}
