"use client"
import Earth from "@/components/Earth"
import Jupiter from "@/components/Jupiter"
import Mars from "@/components/Mars"
import Mercury from "@/components/Mercury"
import Neptune from "@/components/Neptune"
import Saturn from "@/components/Saturn"
import Uranus from "@/components/Uranus"
import Venus from "@/components/Venus"
import { planetsInfo } from "@/constants"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Image from "next/image"
import React, { useState } from "react"

export default function Home() {
  const [activePlanetId, setActivePlanetId] = useState(3)
  const planetsCount = 8
  const planet = planetsInfo.find((p) => p.id === activePlanetId)

  const increasePlanetId = () => {
    if (activePlanetId === planetsCount) {
      setActivePlanetId(1)
    } else {
      setActivePlanetId((prev) => prev + 1)
    }
  }

  const decreasePlanetId = () => {
    if (activePlanetId === 1) {
      setActivePlanetId(8)
    } else {
      setActivePlanetId((prev) => prev - 1)
    }
  }

  const renderPlanetModel = () => {
    switch (activePlanetId) {
      case 1:
        return <Mercury scale={0.1} position={[0, 0, 0]} />
      case 2:
        return <Venus scale={0.0026} position={[0, 0, 0]} />
      case 3:
        return <Earth scale={8.5} position={[0, 0, 0]} />
      case 4:
        return <Mars scale={0.2} position={[0, 0, 0]} />
      case 5:
        return <Jupiter scale={0.015} position={[0, 0, 0]} />
      case 6:
        return <Saturn scale={0.018} position={[0, 0, 0]} />
      case 7:
        return <Uranus scale={0.003} position={[0, 0, 0]} />
      case 8:
        return <Neptune scale={0.17} position={[0, 0, 0]} />
      default:
        return null
    }
  }
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
          <OrbitControls
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            enablePan={false}
          />
          {renderPlanetModel()}
        </Canvas>
      </div>
      <div className="absolute right-20 top-72  bg-gray-800/60 p-4 rounded-xl grid grid-cols-2 gap-8">
        {planet.details.map(({ label, value }) => (
          <React.Fragment key={label}>
            <div className="col-span-1">
              <p className=" font-bold text-xl text-gray-300">{label}</p>
            </div>
            <div className="col-span-1">
              <p className="text-white text-xl">{value}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="absolute left-20 top-72 bg-gray-800/60 p-4 rounded-xl flex flex-col gap-8 w-[550px]">
        <h4 className="text-3xl text-white font-bold">Facts</h4>
        {planet.facts.map((fact, index) => (
          <div key={index} className="text-white text-xl">
            <span className="font-bold text-gray-500">#{index + 1} </span>{" "}
            {fact}
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 w-full flex items-center justify-center gap-12">
        <div className="cursor-pointer" onClick={decreasePlanetId}>
          <Image
            src="/assets/arrow-left.png"
            alt="arrow-left"
            width={50}
            height={50}
          />
        </div>
        <h3 className="text-white font-bold text-7xl text-center">
          {planet.name}
        </h3>
        <div className="cursor-pointer" onClick={increasePlanetId}>
          <Image
            src="/assets/arrow-right.png"
            alt="arrow-right"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}
