import { useEffect }  from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()
  const { camera } = useThree();

  useEffect(() => {
    console.log('Default Camera FOV:', camera.fov);
    console.log('Default Camera Aspect Ratio:', camera.aspect);
    console.log('Default Camera Near Clipping Plane:', camera.near);
    console.log('Default Camera Far Clipping Plane:', camera.far);
    console.log('Default Camera Position:', camera.position);
  }, [camera]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  )
}

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={3} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App
