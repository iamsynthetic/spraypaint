"use client";
import { useEffect, useRef } from "react";
import FloatingCan from "../../components/floating-can";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../../context";
gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = { className?: string };

export default function Scene({}: Props) {
  const { insection2 } = useAppContext();
  const tl = useRef<GSAPTimeline | null>(null);
  const can1Ref = useRef<Group>(null);
  const can1GroupRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  const FLOAT_SPEED = 1;

  useGSAP(() => {
    if (!can1Ref.current) return;
    gsap.set(can1Ref.current.position, { y: -1, z: 3 });
    gsap.set(can1Ref.current.rotation, { y: 100 });
    gsap.set(can1Ref.current.scale, { x: 1, y: 1 });
    const introTl = gsap.timeline({
      defaults: { duration: 2, ease: "back.inOut(1)" },
    });

    if (window.scrollY < 20) {
      console.log("scrollY is: " + window.scrollY);
      if (can1GroupRef.current) {
        introTl
          .from(
            can1GroupRef.current.scale,
            { x: 0, y: 0, duration: 0.3, ease: "back.out" },
            0
          )
          .from(
            can1GroupRef.current.position,
            { y: -2, duration: 0.4, ease: "expo.InOut" },
            0
          );
      }
    }

    const scrollTl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=300px",
        scrub: 1,
      },
    });

    scrollTl.to(can1Ref.current?.position, { x: 0, y: -0.5, z: 2 }, 0);

    tl.current = gsap
      .timeline()
      .to(can1Ref.current?.rotation, {
        duration: 0.4,
        y: 1.5,
        delay: 0,
        ease: "expo.inOut",
      })
      .reverse();
  });

  useEffect(() => {
    console.log("three-scene insection2 is: " + insection2);
    tl.current?.reversed(!insection2);
  }, [insection2]);

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan ref={can1Ref} floatSpeed={FLOAT_SPEED} />
      </group>
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
