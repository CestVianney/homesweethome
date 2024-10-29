import "./PlanPage.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ApartmentModel() {
  const { scene } = useGLTF("/assets/glb/blenderApartment.glb");
  return <primitive object={scene} scale={[0.3, 0.3, 0.3]} />;
}

const PlanPage = () => {
  return (
    <div className="page-block">
      <Canvas camera={{ position: [15, 20, 8], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={<span>Loading...</span>}>
          <ApartmentModel />
        </Suspense>
        <OrbitControls
          target={[5, 0, -2]} // Targeting the point (5, 0, 0)
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default PlanPage;
