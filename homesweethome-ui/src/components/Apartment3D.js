import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Apartment3D.css";

function ApartmentModel() {
    const { scene } = useGLTF("/assets/glb/blenderApartment.glb");
    return <primitive object={scene} scale={[0.3, 0.3, 0.3]} />;
}

const Apartment3D = () => {
    return (
        <div
            className="canvas-container"
        >
            <Canvas camera={{ position: [10.56, 8.30, 3.68], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <Suspense fallback={<span>Loading...</span>}>
                    <ApartmentModel />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

useGLTF.preload("/assets/glb/blenderApartment.glb");

export default Apartment3D;
