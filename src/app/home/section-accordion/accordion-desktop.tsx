"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

type Props = { className?: string };
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AccordionDesktop({ className }: Props) {
  const accordionelements = [
    {
      xpos: "0vw",
      srcimg: "/graffiti/no-brain.png",
      width: 181,
      height: 143,
      title: "Brain Dead Designs",
      alt: "picture a brain in a circle with a line crossing it.",
    },
    {
      xpos: "-23.5vw",
      srcimg: "/graffiti/heart.png",
      width: 181,
      height: 143,
      title: "Matters of the Heart",
      alt: "picture a brain in a circle with a line crossing it.",
    },
    {
      xpos: "-47vw",
      srcimg: "/graffiti/ghost.png",
      width: 110,
      height: 275,
      title: "Ghost With the Most",
      alt: "picture a brain in a circle with a line crossing it.",
    },
  ];

  const accordionitems = accordionelements.map((element, index) => (
    <div
      key={index}
      className={`flex items-end justify-center cursor-pointer ${"card" + index}`}
      onMouseOver={() => {
        gsap.to(`${".card" + index}`, {
          duration: 0.3,
          width: "80vw",
          height: "40vh",
          x: `${element.xpos}`,
          overflow: "hidden",
          zIndex: 3000,
          ease: "Back.InOut",
        });
        if (index === 0) {
          gsap.to(".card1", {
            duration: 0.3,
            width: "10vw",
            height: "40vh",
            x: "+46.5vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card2", {
            duration: 0.3,
            width: "10vw",
            height: "40vh",
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
            height: "40vh",
            x: "0vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card2", {
            duration: 0.3,
            width: "10vw",
            height: "40vh",
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
            height: "40vh",
            x: "0vw",
            overflow: "hidden",
            zIndex: 1000,
            ease: "Back.InOut",
          });
          gsap.to(".card1", {
            duration: 0.3,
            width: "10vw",
            height: "40vh",
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
      <div
        className={`bg-green-400 align-center text-align items-center pb-[10vw]`}
      >
        <Image
          className={`align-center text-align bg-purple-400`}
          src={`${element.srcimg}`}
          width={`${element.width}`}
          height={`${element.height}`}
          alt={`${element.alt}`}
        />
        <div className={`text-base mt-[20px]`}>
          <h1 className={`permanent-marker text-xl`}>{`${element.title}`}</h1>{" "}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={clsx("", className)}>
      <div
        className={`${styles.thebg} w-screen h-[400px] md:h-[40vh] mt-[100px]`}
      >
        <div className={`w-screen h-[40vh] grid md:grid-cols-3 bg-slate-400`}>
          {accordionitems}
        </div>
      </div>
    </div>
  );
}
