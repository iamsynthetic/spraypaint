"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./the-header.css";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { useAppContext } from "../../context";
type Props = { className?: string };

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function TheHeader({ className }: Props) {
  // const { isfinished } = useAppContext();

  const navcontainer = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);
  // const tl2 = useRef<GSAPTimeline | null>(null);
  const menuoverlay = useRef<HTMLDivElement>(null);
  const menulinks = useRef<HTMLDivElement>(null);
  const submenulinks = useRef<HTMLDivElement>(null);
  const menucircle = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const {
    setHovering,
    setMainNavHovering,
    // setisthiselementanimatingout,
    // isthiselementanimatingout,
  } = useAppContext();

  // const overlaybgcolor = "#f2668b";
  const overlaymenucolor = "#f2e96b";
  // const bluecolor = "#04ADBF";
  const pinkcolor = "#f2529d";
  // const tancolor = "#f2eb8d";

  const routes = [
    {
      name: "Home",
      id: "/",
      class: "dropdown-graffiti0 dropdown-graffiti-heart",
      src: "/graffiti/heart.png",
      width: 254,
      height: 286,
      alt: "picture of crown",
    },
    {
      name: "About",
      id: "about",
      class: "dropdown-graffiti1 dropdown-graffiti-hash",
      src: "/graffiti/hash.png",
      width: 352,
      height: 380,
      alt: "picture of crown",
    },
    {
      name: "Contact",
      id: "contact",
      class: "dropdown-graffiti2 dropdown-graffiti-crown",
      src: "/graffiti/crown.png",
      width: 180,
      height: 238,
      alt: "picture of crown",
    },
  ];

  const socialicons = [
    {
      name: "facebook",
      icon: <FaFacebook />,
      id: "http://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      id: "http://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      id: "http://www.linkedin.com",
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      id: "http://www.youtube.com",
    },
  ];

  const mainnavinvisiblebuttons = [
    {
      class: "invisiblebutton0",
      href: "/",
    },
    {
      class: "invisiblebutton1",
      href: "/about",
    },
    {
      class: "invisiblebutton2",
      href: "/contact",
    },
  ];

  const invisiblebuttons = mainnavinvisiblebuttons.map(
    (invisiblebutton, index) => (
      <Link
        key={index}
        href={`${invisiblebutton.href}`}
        className={`absolute z-50 ${invisiblebutton.class}`}
        onMouseOver={() => {
          setMainNavHovering(true);
          gsap.to(`${".big-menu-link" + index}`, {
            duration: 0.3,
            x: 20,
            color: overlaymenucolor,
            ease: "expo.InOut",
          });
          gsap.to(`${".dropdown-graffiti" + index}`, {
            duration: 0.2,
            opacity: 1,
            scale: 1,
            ease: "quint.inOut",
          });
        }}
        onMouseLeave={() => {
          // setisthiselementanimatingout(true);
          setMainNavHovering(false);
          gsap.to(`${".big-menu-link" + index}`, {
            duration: 0.3,
            x: 0,
            color: "#000000",
            ease: "expo.InOut",
          });
          gsap.to(`${".dropdown-graffiti" + index}`, {
            duration: 0.2,
            scale: 0.7,
            opacity: 0,
            ease: "quint.InOut",
          });
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
    )
  );

  const navitems = routes.map((route, index) => (
    <Link
      key={index}
      href={`${route.id}`}
      className={`permanent-marker text-lg ${"nav" + index}`}
      onMouseOver={() => {
        setMainNavHovering(true);
        gsap.to(`${".imagetomask" + index}`, {
          duration: 0.5,
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.In",
        });
      }}
      onMouseLeave={() => {
        setMainNavHovering(false);

        gsap.to(`${".imagetomask" + index}`, {
          duration: 0.5,
          clipPath: "polygon(0 0, 0% 0%, 0% 0%, 0% 0%)",
          ease: "expo.In",
        });
      }}
    >
      {route.name}
      <div className="hoverline">
        <div className="hoverlinemask">
          <Image
            className={`${"imagetomask" + index}`}
            src="/hover.png"
            width={184}
            height={116}
            alt="picture of sprayed paint"
          />
        </div>
      </div>
    </Link>
  ));

  useGSAP(
    () => {
      gsap.set(menuoverlay.current, { y: 75 });
      gsap.set(menucircle.current, { opacity: 0, scaleX: 0, scaleY: 0 });
      tl.current = gsap
        .timeline()
        // .set(menuoverlay.current, {
        //   background: "cred",
        // })
        .to(menuoverlay.current, {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.inOut",
        })
        .fromTo(
          ".menu-link-item-holder",
          { y: -80, opacity: 0 },
          {
            duration: 0.4,
            rotation: 0,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: -0.6,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          ".social-media-links",
          { y: -40, opacity: 0 },
          {
            duration: 0.3,
            rotation: 0,
            y: 0,
            opacity: 1,
            stagger: 0.01,
            delay: -0.3,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          ".show-us",
          { y: -80, opacity: 0 },
          {
            duration: 0.4,
            rotation: 0,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            delay: -0.6,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          submenulinks.current,
          { y: 200, opacity: 0 },
          { duration: 0.4, y: 0, opacity: 1, delay: -1, ease: "expo.inOut" }
        )
        .to(".thenavitems", {
          duration: 0.4,
          y: -80,
          opacity: 0,
          delay: -1.5,
          stagger: 0.4,
          ease: "expo.inOut",
        })
        .reverse();
    },
    {
      scope: navcontainer,
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    tl.current?.reversed(!isOpen);
    // tl2.current?.seek(0.5);
    // if (isfinished) {
    //   console.log("IT IS TRUE");
    // }
  }, [isOpen]);

  return (
    <div ref={navcontainer} className={clsx("menu-bar", className)}>
      {/* bar */}
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4">
        {/* overlay block */}
        <div className="menu-overlay mt-[-80px]" ref={menuoverlay}>
          <div className="grid grid-cols-1 2lg:grid-cols-5 p-6 w-full">
            <div className={`col-span-3 2lg:mr-4`}>
              <div>
                {invisiblebuttons}
                {/* main menu items - home, about, contact */}
                {routes.map((link, index) => (
                  <div className="menu-link-item" key={index}>
                    <Link href={link.id}>
                      <div
                        className={`menu-link-item-holder permanent-marker xs:text-6xl sm:text-8xl md:text-9xl xl:text-10xl uppercase xs:leading-[60px] sm:leading-[90px] md:leading-[120px] ml-[30px] text-black z-20 ${"big-menu-link" + index}`}
                        ref={menulinks}
                      >
                        <Image
                          className={`opacity-0 scale-0 ${link.class}`}
                          src={`${link.src}`}
                          width={`${link.width}`}
                          height={`${link.height}`}
                          alt={`${link.alt}`}
                        />
                        {link.name}
                        {/* set is : {JSON.stringify(isthiselementanimatingout)} */}
                      </div>
                    </Link>
                  </div>
                ))}
                {/* social media buttons block */}
                <div
                  className={`flex flex-row xs:mt-[10px] sm:mt-[30px] xs:ml-[15px] sm:ml-[16px] md:ml-[-12px] xl:ml-[-24px] color-offwhite`}
                >
                  {socialicons.map((link, index) => (
                    <div
                      className="social-media-links relative xs:mt-[10px] sm:mt-[-10px] xs:ml-[20px] sm:ml-[20px] md:ml-[45px] xl:ml-[60px]"
                      key={index}
                    >
                      <div
                        className="flex w-8 h-8 z-50 opacity-70 absolute cursor-pointer"
                        onMouseOver={() => {
                          setMainNavHovering(true);
                          gsap.to(`${".big-menu-sociallink" + index}`, {
                            duration: 0.3,
                            color: "#000000",
                            ease: "expo.InOut",
                          });
                          gsap.fromTo(
                            `${".big-menu-sociallink-label" + index}`,
                            {
                              opacity: 0,
                              x: 20,
                            },
                            {
                              duration: 0.3,
                              opacity: 1,
                              x: 0,
                              ease: "expo.InOut",
                            }
                          );
                        }}
                        onMouseLeave={() => {
                          setMainNavHovering(false);
                          gsap.to(`${".big-menu-sociallink" + index}`, {
                            duration: 0.3,
                            color: pinkcolor,
                            ease: "expo.InOut",
                          });
                          gsap.fromTo(
                            `${".big-menu-sociallink-label" + index}`,
                            {
                              opacity: 1,
                              x: 0,
                            },
                            {
                              duration: 0.3,
                              opacity: 0,
                              x: 20,
                              ease: "expo.InOut",
                            }
                          );
                        }}
                      />
                      <div
                        className={`flex flex-col justify-end text-3xl z-10 ${"big-menu-sociallink" + index}`}
                        ref={submenulinks}
                      >
                        <Link
                          href={link.id}
                          target="_blank"
                          className="flex xs:flex-col sm:flex-row cursor-default"
                        >
                          {link.icon}
                          <span
                            className={`text-sm xs:ml-[-15px] sm:ml-[10px] mt-[5px] open-sans-500 opacity-0 ${"big-menu-sociallink-label" + index}`}
                          >
                            {link.name}
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 xs:mt-[20px] sm:mt-[40px] xl:mt-[0px] 2lg:ml-4">
              <div
                className={`relative open-sans-900 uppercase text-4xl leading-[120px] xs:ml-[30px] text-black`}
                ref={menulinks}
              >
                <div className="2lg:text-right 2lg:mr-[20px] xs:leading-8 2lg:leading-9 2lg:mt-[100px]">
                  <div className="show-us xs:text-[30px] 2lg:text-[40px]">
                    SHOW US
                    <br />
                    YOUR BEST WORK
                  </div>
                  <div>
                    <Link
                      href="/"
                      className={`show-us permanent-marker text-lg cursor-default xs:ml-[-16px]`}
                    >
                      <div
                        className="xs:mt-0 xl:mt-3 show-button"
                        onMouseOver={() => {
                          setMainNavHovering(true);
                          gsap.to(".dropdownmenu-imagetomask", {
                            duration: 0.2,
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            ease: "expo.InOut",
                          });
                          gsap.to(".show-button", {
                            duration: 0.2,
                            color: "#f2bdc7",
                            x: 20,
                            ease: "elastic.InOut",
                          });
                          gsap.to(".show-button-chevron", {
                            duration: 0.1,
                            delay: 0.1,
                            color: "#f2bdc7",
                            x: 15,
                            ease: "elastic.InOut",
                          });
                        }}
                        onMouseLeave={() => {
                          setMainNavHovering(false);

                          gsap.to(".dropdownmenu-imagetomask", {
                            duration: 0.2,
                            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
                            ease: "expo.InOut",
                          });
                          gsap.to(".show-button", {
                            duration: 0.2,
                            color: "black",
                            x: 0,
                            ease: "elastic.InOut",
                          });
                          gsap.to(".show-button-chevron", {
                            duration: 0.1,
                            delay: 0.1,
                            color: "black",
                            x: 0,
                            ease: "elastic.InOut",
                          });
                        }}
                      >
                        I&apos;ll show you
                      </div>
                      <span className="ml-[-10px] absolute xs:mt-[10px] xl:mt-[21px] show-button-chevron">
                        &gt;
                      </span>
                      <div className="dropdownmenu-hovermask mr-[-20px]">
                        <Image
                          className="dropdownmenu-imagetomask"
                          src="/big-hover.png"
                          width={254}
                          height={123}
                          alt="picture of sprayed paint"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left side logo */}
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl z-50">
            Logo
          </a>
        </div>
        {/* right side menu items */}
        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <div className="space-x-4 thenavitems flex">{navitems}</div>
        </div>

        {/* right side hamburger menu */}
        <div className={`space-x-4 ${styles.menucontainer}`}>
          <div ref={menucircle} />
          <div
            onMouseOver={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`${styles.button}`}
          >
            <div
              className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
