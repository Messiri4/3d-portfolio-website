import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  // Rotate the mesh each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Use boxGeometry for a cube, or keep cylinderGeometry if that’s your intention */}
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Camera controls */}
      <OrbitControls enableZoom enablePan enableRotate />

      {/* Lighting */}
      <directionalLight position={[1, 1, 1]} intensity={2} color="#9CDBA6" />
      <ambientLight intensity={0.5} />

      {/* Background color */}
      <color attach="background" args={["#F0F0F0"]} />

      {/* Object */}
      <RotatingCube />
    </Canvas>
  );
};

export default App;
