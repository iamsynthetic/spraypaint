"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppContext } from "../../context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}
export default function BlurryCursor({ isActive = false }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const size = isActive ? 400 : 14;
  //   const tl = (useRef < GSAPTimeline) | (null > null);
  const tl = useRef(null);
  const tl2 = useRef(null);
  const { hovering, mainNavHovering } = useAppContext();

  //   const tl = (useRef < GSAPTimeline) | (null > null);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = useCallback(() => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  }, []);

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline().fromTo(
        circle.current,
        {
          scale: 1,
          opacity: 1,
          backgroundColor: "#000000",
          ease: "power4.Out",
        },
        {
          duration: 0.3,
          scale: 3,
          opacity: 1,
          backgroundColor: "#000000",
          ease: "power4.Out",
        }
      );
      tl2.current = gsap.timeline().to(circle.current, {
        duration: 0.3,
        scale: 0,
        opacity: 1,
        backgroundColor: "#000000",
        ease: "power4.Out",
      });
    },
    {
      scope: circle,
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    console.log("sticky-cursor");
    tl.current?.reversed(!hovering);
    tl2.current?.reversed(!mainNavHovering);
    // console.log("name is: " + name);
    // tl2.current?.reversed(!mainNavHovering);
    // gsap.set(followerRef, { xPercent: 500, yPercent: 500 });
    // window.addEventListener("mousemove", moveCursor);
  });

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive, animate]);

  return (
    <div className="relative h-screen">
      <div
        style={{
          backgroundColor: "#BCE4F2",
          width: size,
          height: size,
          filter: `blur(${isActive ? 100 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
        ref={circle}
      >
        {hovering}
      </div>
    </div>
  );
}
