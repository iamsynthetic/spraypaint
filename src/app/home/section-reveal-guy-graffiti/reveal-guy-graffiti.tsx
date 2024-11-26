import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = { className?: string };

export default function RevealGuyGraffiti({ className }: Props) {
  const size = useWindowSize();
  const [theheight, setTheHeight] = useState("");
  const tl1 = useRef<GSAPTimeline | null>(null);
  const guygraffitibgref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".guygraffitimask",
        pin: false,
        markers: false,
        start: "top center",
        end: theheight,
        toggleActions: "restart complete complete reverse",
      },
    });

    tl1.current.from(guygraffitibgref.current, {
      clipPath: `inset(100%)`,
      duration: 0.5,
      ease: "expo.easeOut",
    });

    tl1.current.from(".thegraphic", {
      scale: 1.2,
      delay: -0.5,
      duration: 1,
      ease: "expo.easeOut",
    });
  });

  useEffect(() => {
    if (size.width != null) {
      if (size.width <= 640) {
        if (guygraffitibgref.current != null) {
          setTheHeight(
            // String(guygraffitibgref.current.getBoundingClientRect().height)
            "500px"
          );
        }
      } else {
        setTheHeight("+=600px");
      }
    }
  }, [size]);

  return (
    <div className={clsx("", className)}>
      <div
        className={`${styles.thebg} guygraffitimask w-screen overflow-hidden`}
        style={{ height: `${theheight}px` }}
      >
        <div className={`relative align-middle`} ref={guygraffitibgref}>
          <Image
            className={`thegraphic`}
            src={"/spray-poster-2-1440x900.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", textAlign: "center" }}
            alt="background image"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
