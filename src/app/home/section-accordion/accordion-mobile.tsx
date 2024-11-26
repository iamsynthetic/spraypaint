"use client";
import clsx from "clsx";
// import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

type Props = { className?: string };
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AccordionMobile({ className }: Props) {
  const accordionelementsmobile = [
    {
      xpos: "0vw",
      srcimg: "/graffiti/no-brain.png",
      width: 181,
      height: 143,
      alt: "picture a brain in a circle with a line crossing it.",
    },
    {
      xpos: "-23.5vw",
      srcimg: "/graffiti/no-brain.png",
      width: 181,
      height: 143,
      alt: "picture a brain in a circle with a line crossing it.",
    },
    {
      xpos: "-47vw",
      srcimg: "/graffiti/no-brain.png",
      width: 181,
      height: 143,
      alt: "picture a brain in a circle with a line crossing it.",
    },
  ];

  const accordionitemsmobile = accordionelementsmobile.map((element, index) => (
    <div
      key={index}
      className={`bg-yellow-500 flex items-center justify-center cursor-pointer ${"card" + index}`}
      onMouseOver={() => {
        gsap.to(`${".card" + index}`, {
          duration: 0.3,
          width: "80vw",
          x: `${element.xpos}`,
          overflow: "hidden",
          zIndex: 3000,
          ease: "Back.InOut",
        });
        if (index === 0) {
          gsap.to(".card1", {
            duration: 0.3,
            width: "10vw",
            x: "+46.5vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card2", {
            duration: 0.3,
            width: "10vw",
            x: "+23vw",
            overflow: "hidden",
            zIndex: 2000,
            ease: "Back.InOut",
          });
        } else if (index === 1) {
          console.log("card is: one " + index);
          gsap.to(".card0", {
            duration: 0.3,
            width: "10vw",
            x: "0vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card2", {
            duration: 0.3,
            width: "10vw",
            x: "+23vw",
            overflow: "hidden",
            zIndex: 2000,
            ease: "Back.InOut",
          });
        } else if (index === 2) {
          console.log("card is: two " + index);
          gsap.to(".card0", {
            duration: 0.3,
            width: "10vw",
            x: "0vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card1", {
            duration: 0.3,
            width: "10vw",
            x: "-23.5vw",
            overflow: "hidden",
            zIndex: 2000,
            ease: "Back.InOut",
          });
        }
      }}
      onMouseLeave={() => {
        gsap.to(".card0", {
          duration: 0.3,
          width: "33.3vw",
          x: "0vw",
          overflow: "hidden",
          zIndex: 1000,
          ease: "Back.InOut",
        });
        gsap.to(".card1", {
          duration: 0.3,
          width: "33.4vw",
          x: "0vw",
          overflow: "hidden",
          zIndex: 1000,
          ease: "Back.InOut",
        });
        gsap.to(".card2", {
          duration: 0.3,
          width: "33.3vw",
          x: "0vw",
          overflow: "hidden",
          zIndex: 2000,
          ease: "Back.InOut",
        });
      }}
    >
      <div>
        <Image
          src={`${element.srcimg}`}
          width={`${element.width}`}
          height={`${element.height}`}
          alt={`${element.alt}`}
        />
        <div className={`text-center mt-[20px]`}>
          <p>title goes here</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={clsx("", className)}>
      <div
        className={`${styles.thebg} w-screen h-[400px] md:h-[60vh] flex justify-center items-center`}
      >
        blah blahb albh
        <div className={`w-screen h-[40vh] grid grid-rows-3`}>
          {accordionitemsmobile}
        </div>
      </div>
    </div>
  );
}
