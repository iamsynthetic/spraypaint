import clsx from "clsx";
import styles from "./styles.module.scss";
import Scene from "./three-scene";
import { View } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import gsap from "gsap";

type Props = { className?: string };

export default function HeroSection({ className }: Props) {
  const size = useWindowSize();
  const theview = useRef<HTMLDivElement>(null);
  const titletxt1ref = useRef(null);
  const titletxt2ref = useRef(null);

  useEffect(() => {
    const title1txt = gsap.to(titletxt1ref.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.3,
      ease: "expo.easeInOut",
    });
    const title2txt = gsap.to(titletxt2ref.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.3,
      delay: 0.2,
      ease: "expo.easeInOut",
    });

    return () => {
      title1txt.kill();
      title2txt.kill();
    };
  }, [size]);

  return (
    <div className={clsx("", className)}>
      <View
        ref={theview}
        className={`theelement pointer-events-none h-screen w-screen top-0 sticky -mt-[100vh] z-20`}
      >
        <Scene />
      </View>
      <div className={`${styles.thebg} h-[100vh] w-screen z-10`}>
        <div className={`text-center`}>
          <div
            className={`pt-[150px] 
            relative 
            open-sans-700 
            xs:text-4xl 
            sm:text-6xl 
            md:text-8xl 
            xl:text-10xl 
            uppercase 
            tracking-tight 
            xs:leading-[60px] 
            sm:leading-[90px] 
            md:leading-[120px] 
            lg:leading-[110px]
          text-black`}
          >
            {/*prettier-ignore*/}
            <div ref={titletxt1ref} className={`permanent-marker opacity-0 translate-y-7`}> SPRAY IT </div>
            {/*prettier-ignore*/}
            <div ref={titletxt2ref} className={`permanent-marker opacity-0 translate-y-7`}>  DON&apos;T SAY IT  </div>
          </div>
        </div>
      </div>
    </div>
  );
}
