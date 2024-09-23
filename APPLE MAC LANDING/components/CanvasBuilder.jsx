import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './MacContainer';

const CanvasBuilder = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar line flex gap-5 py-10 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="text-white absolute top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="text-7xl tracking-tighter font-700">macbook Pro.</h3>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        <OrbitControls enableZoom={false} />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default CanvasBuilder