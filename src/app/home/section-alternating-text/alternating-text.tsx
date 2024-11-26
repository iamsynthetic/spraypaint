"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./three-scene";
// import { useMediaQuery } from "@uidotdev/usehooks";
type Props = { className?: string };

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AlternatingText({ className }: Props) {
  // const isbig = useMediaQuery("only screen and (min-width : 641px)");

  const textgroups = [
    {
      txtheadline: "Versatile",
      txtsubhead: "Makes the art easier to make",
      txtbody:
        "If you're just starting out, or need something that can handle anything, look no further, our artist series is more than capable of anything you throw at it, or anything you need to throw this spray at...you get it.",
    },
    {
      txtheadline: "True Color",
      txtsubhead: "Guranteed to look as good as you.",
      txtbody:
        "You can try mixing, nothing wrong with that, but with over 150 colors to choose from, maybe you don't have to worry as much. Also comes in clear, no really.",
    },
    {
      txtheadline: "Lightning Fast",
      txtsubhead: "faster to dry, faster to finish.",
      txtbody:
        "Incredibly fast drying. Nothing smart to say here, but rest assured that as soon as this hits, it stays put, so you can get done faster and you know, get out faster.",
    },
  ];

  return (
    <div className={clsx("HOME", className, ``)}>
      <div className={`${styles.thebg} w-screen h-[300vh] relative grid `}>
        <div className={`alternating-text-container grid h-[300vh]`}>
          {/* {isbig && ( */}
          <View
            className={`${styles.alternatingtextview} alternating-text-view absolute left-0 top-0 h-screen w-full`}
          >
            <Scene />
          </View>
          {/* )} */}
          {textgroups.map((item, index) => (
            <div
              key={index}
              className="alternating-section grid sm:h-[300px] md:h-screen place-items-center md:gap-x-12 xs:grid-cols-1 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0
                    ? "xs:col-start-1 xs:pl-4 xs:pr-4 md:pl-16"
                    : "xs:col-start-2 xs:pl-4 xs:pr-4 md:col-start-2 md:pr-16"
                )}
              >
                <h2
                  className={`thetitle xs:text-4xl md:text-6xl permanent-marker font-bold`}
                >
                  {item.txtheadline}
                </h2>
                <h3
                  className={`thesubtitle text-xl open-sans-900 mt-[-10px] mb-[10px]`}
                >
                  {item.txtsubhead}
                </h3>
                <div className={`thebody text-lg open-sans-500`}>
                  {item.txtbody}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
