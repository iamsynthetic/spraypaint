"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./section-hero/hero";
import WhatsItsUse from "./section-whats-its-use/whats-its-use";
import RevealGuyGraffiti from "./section-reveal-guy-graffiti/reveal-guy-graffiti";
import AlternatingText from "./section-alternating-text/alternating-text";
import HorizontalScroll from "./section-horizontal-scroll/horizontal-scroll";
import RevealNetflixGraffiti from "./section-reveal-netflix-graffiti/reveal-netflix-graffiti";
import RevealGirlGraffiti from "./section-reveal-girl-graffiti/reveal-girl-graffiti";
import Quote1 from "./section-quote-1/quote1";
import Quote2 from "./section-quote-2/quote2";
import Footer from "../components/footer/main-footer";
import { ClientOnly } from "../hooks/ClientOnly";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home({}) {
  return (
    <div className={clsx("HOME")}>
      <div className={`${styles.thebg}`}>
        <HeroSection />
        <Quote1 />
        <RevealGuyGraffiti />
        <WhatsItsUse className={`whatsitsuse mt-[0vh] z-10`} />
        <RevealNetflixGraffiti />
        <Quote2 />
        <HorizontalScroll />
        <ClientOnly>
          <AlternatingText className={`alternatingtext z-30`} />
        </ClientOnly>
        <RevealGirlGraffiti />
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </div>
    </div>
  );
}
