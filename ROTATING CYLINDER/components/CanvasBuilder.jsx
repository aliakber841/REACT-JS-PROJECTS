import React from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const CanvasBuilder = () => {
 
  return (
    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
        {/* <ToneMapping adaptive /> */}
        {/* your effects go here */}
      </EffectComposer>
    </Canvas>
  );
}

export default CanvasBuilder