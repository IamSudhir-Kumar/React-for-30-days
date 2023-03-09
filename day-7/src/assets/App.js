import React from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";

function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLamberMaterial attach="material" color="hotpink" />
        </mesh>
    )
}
export default function App() {
    return <Canvas>
        <Box />
    </Canvas>
}