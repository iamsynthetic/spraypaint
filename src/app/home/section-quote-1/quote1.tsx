import clsx from "clsx";
import { useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { className?: string };
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Quote1({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    gsap.set(".quoteref", { opacity: 0 });
    gsap.set(".authorref", { opacity: 0 });
    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".quote1",
        pin: false,
        start: "top 40%",
        end: "bottom center",
        toggleActions: "restart complete complete reverse",
      },
    });

    tl1.current
      .to(".quoteref", {
        opacity: 1,
        duration: 0.5,
      })
      .to(".authorref", {
        opacity: 1,
        delay: -0.4,
        duration: 0.5,
      });
  });

  return (
    <div className={clsx("", className)}>
      <div
        className={`${styles.thebg} quote1 w-screen h-[400px] md:h-[60vh] flex justify-center items-center`}
      >
        <div
          className={`p-10 md:p-40 open-sans-700 tracking-wide text-lg md:text-xl text-black`}
        >
          <q className={`quoteref`}>
            I like druggy downtown kids who spray paint walls and trains. I like
            their lack of training, their primitive technique. I think it hurts
            you, when you stay too long in school.
          </q>

          <p className={`authorref mt-[20px] open-sans-500`}>Lou Reed</p>
        </div>
      </div>
    </div>
  );
}
