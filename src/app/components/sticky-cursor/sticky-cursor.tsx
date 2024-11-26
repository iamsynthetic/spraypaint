"use client";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import { useAppContext } from "../../context";
import styles from "./styles.module.scss";
type Props = { className?: string };

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function StickyCursor({ className }: Props) {
  // const { hovering, mainNavHovering } = useAppContext();
  const followerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  // const menuoverlay = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "expo.Out",
    });
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline().to(followerRef.current, {
        duration: 0.3,
        scaleX: 2,
        scaleY: 2,
        opacity: 1,
        backgroundColor: "#000000",
        ease: "power4.Out",
      });
      // .reverse();
      tl2.current = gsap.timeline().fromTo(
        followerRef.current,
        {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
        },
        {
          duration: 0.3,
          // scaleX: 0,
          // scaleY: 0,
          opacity: 0.7,
          ease: "power4.Out",
        }
      );
    },
    {
      scope: followerRef,
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    // console.log("sticky-cursor");
    // tl.current?.reversed(!hovering);
    // tl2.current?.reversed(!mainNavHovering);
    // gsap.set(followerRef, { xPercent: 500, yPercent: 500 });
    window.addEventListener("mousemove", moveCursor);
  });
  // useEffect(() => {
  //   gsap.set(followerRef, { xPercent: 200, yPercent: 200 });
  //   window.addEventListener("mousemove", moveCursor);
  // }, []);

  return (
    <div>
      <div className={clsx("relative", className)}>
        <div ref={followerRef} className={`${styles.cursorFollower}`}></div>
      </div>
    </div>
  );
}
