import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { IoHome } from "react-icons/io5";
import "./Apartment3D.css";

function ApartmentModel() {
  const { scene } = useGLTF("/assets/glb/blenderApartment.glb");
  return <primitive object={scene} scale={[0.3, 0.3, 0.3]} />;
}

const Apartment3D = () => {
  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
          <IoHome size={50} />
        </div>
        <div className="block-top-title">
          <h2>Chez Vianney</h2>
          <h3>Les frites sont gratuites</h3>
        </div>
      </div>
      <div className="block-central">
        <Canvas camera={{ position: [15, 20, 8], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Suspense fallback={<span>Loading...</span>}>
            <ApartmentModel />
          </Suspense>
          <OrbitControls
          target={[5, 0, -2]} 
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
        />
        </Canvas>
      </div>
    </div>
  );
};

useGLTF.preload("/assets/glb/blenderApartment.glb");

export default Apartment3D;
