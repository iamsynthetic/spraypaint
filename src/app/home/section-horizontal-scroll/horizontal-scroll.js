import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden z-30">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex flex-row relative"
        >
          <div
            className={`${styles.bg1} h-screen w-screen flex justify-center items-center`}
          >
            <div
              className={`${styles.txt1} w-1/2 p-4 mx-auto text-center permanent-marker text-[50px] md:text-[80px]`}
            >
              GRAFFITI
            </div>
          </div>
          <div
            className={`${styles.bg2} h-screen w-screen flex justify-center items-center`}
          >
            <div
              className={`${styles.txt2} w-1/2 p-4 mx-auto text-center permanent-marker text-[50px] md:text-[80px]`}
            >
              IS NOT
            </div>
          </div>
          <div
            className={`${styles.bg3} h-screen w-screen flex justify-center items-center`}
          >
            <div
              className={`${styles.txt3} w-1/2 p-4 mx-auto text-center permanent-marker text-[50px] md:text-[80px]`}
            >
              A CRIME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll;
