"use client";
// import clsx from "clsx";
import { SprayCan, SprayCanProps } from "./spraycan";
import { Float } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  colortype?: SprayCanProps["colortype"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      colortype = "can1",
      floatSpeed = 1,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SprayCan colortype={colortype} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
