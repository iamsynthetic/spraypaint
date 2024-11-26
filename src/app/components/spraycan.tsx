"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/spraycan.gltf");

const colorTypes = {
  can1: "/labels/spraycan-artist.png",
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
};

// const metalMaterial = new THREE.MeshStandardMaterial({
//   roughness: 0.4,
//   metalness: 1,
//   color: "#bbbbbb",
// });

export type SprayCanProps = {
  colortype?: keyof typeof colorTypes;
  scale?: number;
};

export function SprayCan({
  colortype = "can1",
  scale = 2,
  ...props
}: SprayCanProps) {
  const { nodes, materials } = useGLTF("/spraycan.gltf");

  const labels = useTexture(colorTypes);

  const label = labels[colortype];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <group
        rotation={[Math.PI, -1.246, Math.PI]}
        scale={[0.106, 0.247, 0.106]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder as THREE.Mesh).geometry}
          //   geometry={nodes.Cylinder.geometry}
          material={materials.Kolpachek}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder_1 as THREE.Mesh).geometry}
          //   geometry={nodes.Cylinder_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder_2 as THREE.Mesh).geometry}
          //   geometry={nodes.Cylinder_2.geometry}
          //   material={materials.Sticcker_Box}
        >
          <meshStandardMaterial roughness={0.5} metalness={0.7} map={label} />
        </mesh>

        {/* /> */}

        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder_3 as THREE.Mesh).geometry}
          //   geometry={nodes.Cylinder_3.geometry}
          material={materials.Color}
        />
      </group>
      {/* <group name="Scene">
        <mesh
          name="CanYellow"
          castShadow
          receiveShadow
          geometry={(nodes.CanYellow as THREE.Mesh).geometry}
          // material={materials.CanYellow}
          material={metalMaterial}
          scale={[1, 2.225, 1]}
        />

        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
        <mesh
          name="Cap"
          castShadow
          receiveShadow
          geometry={(nodes.Cap as THREE.Mesh).geometry}
          material={materials.Cap}
          position={[0, 1.887, 0]}
          rotation={[-Math.PI, 1.328, -Math.PI]}
          scale={[0.374, 0.436, 0.374]}
        />
      </group> */}
    </group>
  );
}

useGLTF.preload("/spraycan.gltf");
