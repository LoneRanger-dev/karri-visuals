"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, MeshDistortMaterial } from "@react-three/drei";
import { Group, MeshStandardMaterial, Color } from "three";
import * as THREE from "three";

interface KVLogo3DProps {
  mouseX?: number;
  mouseY?: number;
}

// Gold metallic material
function GoldMaterial() {
  return (
    <meshStandardMaterial
      color={new Color("#C9A24B")}
      metalness={0.9}
      roughness={0.15}
      envMapIntensity={1.5}
    />
  );
}

// Teal metallic material
function TealMaterial() {
  return (
    <meshStandardMaterial
      color={new Color("#1FA8B8")}
      metalness={0.9}
      roughness={0.15}
      envMapIntensity={1.5}
    />
  );
}

// Simplified K letter from boxes
function LetterK({ x = 0 }: { x?: number }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Vertical bar */}
      <mesh position={[-0.35, 0, 0]}>
        <boxGeometry args={[0.18, 1.4, 0.18]} />
        <GoldMaterial />
      </mesh>
      {/* Upper diagonal */}
      <mesh position={[0.05, 0.38, 0]} rotation={[0, 0, -0.7]}>
        <boxGeometry args={[0.18, 0.75, 0.18]} />
        <GoldMaterial />
      </mesh>
      {/* Lower diagonal */}
      <mesh position={[0.05, -0.38, 0]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.18, 0.75, 0.18]} />
        <GoldMaterial />
      </mesh>
    </group>
  );
}

// Simplified V letter from boxes
function LetterV({ x = 0 }: { x?: number }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Left diagonal */}
      <mesh position={[-0.28, 0.18, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.18, 1.4, 0.18]} />
        <TealMaterial />
      </mesh>
      {/* Right diagonal */}
      <mesh position={[0.28, 0.18, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.18, 1.4, 0.18]} />
        <TealMaterial />
      </mesh>
    </group>
  );
}

// Camera body on top
function CameraAccent() {
  return (
    <group position={[0, 1.1, 0]}>
      {/* Body */}
      <RoundedBox args={[0.8, 0.4, 0.35]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#1a2a40" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      {/* Lens */}
      <mesh position={[0, 0, 0.22]}>
        <cylinderGeometry args={[0.14, 0.14, 0.18, 16]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Lens glass */}
      <mesh position={[0, 0, 0.32]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial
          color="#1FA8B8"
          metalness={0.8}
          roughness={0.0}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Tripod stub */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 0.3, 8]} />
        <meshStandardMaterial color="#C9A24B" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function KVLogo3D({ mouseX = 0, mouseY = 0 }: KVLogo3DProps) {
  const groupRef = useRef<Group>(null);
  const t = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    t.current += delta;

    // Slow rotation
    groupRef.current.rotation.y += delta * 0.3;

    // Floating bob
    groupRef.current.position.y = Math.sin(t.current * 0.8) * 0.08;

    // Mouse parallax
    groupRef.current.rotation.x += (mouseY * 0.3 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (-mouseX * 0.15 - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[-3, 3, 3]} color="#C9A24B" intensity={4} />
      <pointLight position={[3, -2, 2]} color="#1FA8B8" intensity={3} />
      <directionalLight position={[0, 5, 5]} intensity={1.5} />

      {/* KV letters */}
      <LetterK x={-0.7} />
      <LetterV x={0.7} />

      {/* Camera accent on top */}
      <CameraAccent />

      {/* Lens flare ring */}
      <mesh position={[0, 0, -0.1]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.6, 0.025, 8, 64]} />
        <meshStandardMaterial
          color="#C9A24B"
          metalness={1}
          roughness={0}
          emissive="#C9A24B"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner teal ring */}
      <mesh position={[0, 0, -0.2]}>
        <torusGeometry args={[1.1, 0.015, 8, 64]} />
        <meshStandardMaterial
          color="#1FA8B8"
          metalness={1}
          roughness={0}
          emissive="#1FA8B8"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}
