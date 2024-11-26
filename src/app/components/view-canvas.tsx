"use client";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "@uidotdev/usehooks";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false }
);
type Props = { className?: string };

export default function ViewCanvas({ className }: Props) {
  const size = useWindowSize();

  const [thefov, setthefov] = useState(0);

  // const thefovref = useRef(10);
  // const thefov = 100;

  useEffect(() => {
    if (size.width != undefined && size.width >= 320 && size.width < 640) {
      console.log("window is: extra small, fov should be 50");
      setthefov(50);
      console.log(thefov);
    } else if (size.width != undefined && size.width >= 640) {
      console.log("window is: medium, fov should be 40");
      setthefov(40);
      console.log(thefov);
    }

    // if (isLoggedIn) {    return <UserGreeting />;  }  return <GuestGreeting />;

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
    // if (camera) {
    //   // Set initial camera position and look at the target
    //   camera.position.set(-30, 30, 30);
    //   camera.lookAt(0, 0, 0);
    //   camera.updateProjectionMatrix();
    // }
  }, [size, thefov]);

  // let dynamiccanvas;

  // Define two components

  return (
    <>
      {thefov == 40 && (
        <Canvas
          className={clsx(className)}
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 30,
          }}
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          camera={{ fov: 40 }}
        >
          <Suspense fallback={null}>
            <View.Port />
          </Suspense>
        </Canvas>
      )}
      {thefov == 50 && (
        <Canvas
          className={clsx(className)}
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 30,
          }}
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          camera={{ fov: 50 }}
        >
          <Suspense fallback={null}>
            <View.Port />
          </Suspense>
        </Canvas>
      )}
      <Loader />
    </>
  );
}
{
  /* 
<Html>
          <div>thefov is: {JSON.stringify(thefov)}</div>
          {thefov == 20 && <div>comp 1</div>}
          {thefov == 80 && <div>comp 2</div>}
        </Html>*/
}
