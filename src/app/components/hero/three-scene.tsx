"use client";
import { useEffect, useRef } from "react";
import FloatingCan from "../floating-can";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../../context";
// import { useWindowSize } from "@uidotdev/usehooks";

// import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = { className?: string };

export default function Scene({}: Props) {
  // const size = useWindowSize();
  // const isReady = useStore((state) => state.isReady);

  const { insection2 } = useAppContext();

  const tl = useRef<GSAPTimeline | null>(null);

  const can1Ref = useRef<Group>(null);
  const can1GroupRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1;
  // let initialzsize = 3;
  // let scalezsize = 0;
  // function Browser({ size: }) {
  //   return (
  //     <div
  //       data-testid="browser"
  //       className="browser"
  //       style={{ width: size.width / 4, height: size.height / 4 }}
  //     />
  //   );
  // }

  useGSAP(() => {
    if (!can1Ref.current) return;
    gsap.set(can1Ref.current.position, { y: -1, z: 3 });
    gsap.set(can1Ref.current.rotation, { y: 100 });
    gsap.set(can1Ref.current.scale, { x: 1, y: 1 });
    // console.log("scalezsize is: " + scalezsize);
    const introTl = gsap.timeline({
      defaults: { duration: 2, ease: "back.inOut(1)" },
    });

    if (window.scrollY < 20) {
      console.log("scrollY is: " + window.scrollY);
      // console.log("size.width is: " + size.width);
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

    // console.log("can1ref scalezsize is: " + scalezsize);
    scrollTl.to(can1Ref.current?.position, { x: 0, y: -0.5, z: 2 }, 0);

    tl.current = gsap
      .timeline()
      // .to(can1Ref.current?.position, {
      //   duration: 0.4,
      //   z: 0.5,
      //   delay: 0,
      //   ease: "expo.inOut",
      // })
      .to(can1Ref.current?.rotation, {
        duration: 0.4,
        y: 1.5,
        delay: 0,
        ease: "expo.inOut",
      })
      .reverse();
  });

  // if (scalezsize == 0.5) {
  //   console.log(
  //     "its definitely at .5 - MOBILE ----------------------------------------------------------------`"
  //   );
  // }

  // function blahblah(num: number) {
  //   const makebigger = gsap.timeline({
  //     scrolltrigger: {
  //       trigger: ".hero",
  //       start: "top top",
  //       end: "+=300px",
  //       scrub: 1,
  //     },
  //   });

  //   makebigger.to(can1Ref?.current.position, { x: 0, y: -0.5, z: num }, 0);
  // }

  useEffect(() => {
    console.log("three-scene insection2 is: " + insection2);
    tl.current?.reversed(!insection2);
    // console.log("window width is: " + size.width);
    // console.log("window height is: " + size.height);
    // console.log("type of window height is: " + typeof size.height);

    // if (size.width != undefined && size.width >= 320 && size.width < 640) {
    //   console.log("window is: extra small");
    //   if (!can1Ref.current) return;
    //   initialzsize = 1;
    //   scalezsize = 0.5;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (
    //   size.width != undefined &&
    //   size.width >= 640 &&
    //   size.width < 768
    // ) {
    //   console.log("window is: small");
    //   if (!can1Ref.current) return;
    //   initialzsize = 1;
    //   // scalezsize = 0.5;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (
    //   size.width != undefined &&
    //   size.width >= 768 &&
    //   size.width < 1024
    // ) {
    //   console.log("window is: medium");
    //   if (!can1Ref.current) return;
    //   initialzsize = 1;
    //   // scalezsize = 0.5;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (
    //   size.width != undefined &&
    //   size.width >= 1024 &&
    //   size.width < 1180
    // ) {
    //   console.log("window is: large");
    //   if (!can1Ref.current) return;
    //   initialzsize = 2;
    //   // scalezsize = 1;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (
    //   size.width != undefined &&
    //   size.width >= 1180 &&
    //   size.width < 1280
    // ) {
    //   console.log("window is: 2 large");
    //   if (!can1Ref.current) return;
    //   initialzsize = 3;
    //   // scalezsize = 2;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (
    //   size.width != undefined &&
    //   size.width >= 1280 &&
    //   size.width < 1536
    // ) {
    //   console.log("window is: extra large");
    //   if (!can1Ref.current) return;
    //   initialzsize = 3;
    //   // scalezsize = 2;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // } else if (size.width != undefined && size.width >= 1536) {
    //   console.log("window is: 2 extra large");
    //   if (!can1Ref.current) return;
    //   initialzsize = 3;
    //   // scalezsize = 2;
    //   gsap.set(can1Ref.current.position, { z: initialzsize });
    // }
  }, [insection2]);

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          // flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      {/* <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          // flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan ref={can3Ref} floatSpeed={FLOAT_SPEED} /> */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
