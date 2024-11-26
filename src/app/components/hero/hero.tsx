"use client";

// import clsx from "clsx";
import Scene from "./three-scene";
import { View } from "@react-three/drei";

// type Props = { className?: string };

export default function Hero({}) {
  return (
    <group>
      {/* <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-full w-full md:block"> */}
      <View className="pointer-events-none z-50 h-full w-full">
        <Scene />
      </View>
    </group>
  );
}
