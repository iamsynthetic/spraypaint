"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
type Props = { className?: string };

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhatsItsUse({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);
  const wordsref = useRef(null);
  const word1ref = useRef(null);
  const word2ref = useRef(null);
  const word3ref = useRef(null);
  const word4ref = useRef(null);
  const word5ref = useRef(null);
  const word6ref = useRef(null);
  const word7ref = useRef(null);

  useGSAP(() => {
    // tl1.current = gsap.timeline({ repeat: 1 });
    tl1.current = gsap.timeline({ repeat: -1 });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
    tl1.current.to(wordsref.current, {
      y: "-=120",
      ease: "elastic.easeInOut",
      duration: 0.2,
      delay: 2,
    });
  }, {});

  return (
    <div className={clsx("HOME", className, ``)}>
      {/*prettier-ignore*/}
      <div className={`${styles.thebg} quote1 w-screen h-[400px] md:h-[60vh] flex justify-center items-center`}>
        <div className="thekeywords h-[120px] ">
          <div className={`${styles.themask}`}>
            <div ref={wordsref} className={`open-sans-900 text-[50px] md:text-[80px]`}>
              <div ref={word1ref} className={`h-[120px] flex items-center justify-center `}>Writer</div>
              <div ref={word2ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>All City</div>
              <div ref={word3ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Blackbook</div>
              <div ref={word4ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Toy</div>
              <div ref={word5ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Throwie</div>
              <div ref={word6ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Scribe</div>
              <div ref={word7ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Extinguishers</div>
              <div ref={word7ref} className={` h-[120px] pt-[5px] pb-[5px] flex items-center justify-center`}>Writer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
