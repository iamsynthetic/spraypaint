"use client";
// import clsx from "clsx";
import styles from "./styles.module.scss";
// import Image from "next/image";
import { gsap } from "gsap";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";

// type Props = { className?: string };

export default function Footer() {
  const isnotbig = useMediaQuery("only screen and (max-width : 640px)");
  const isbig = useMediaQuery("only screen and (min-width : 641px)");
  const submenulinks = useRef<HTMLDivElement>(null);
  const hovercolor = "#777cd9";

  const productslinks = [
    {
      name: "Artist Series",
      id: "http://www.google.com",
    },
    {
      name: "Heavy Series",
      id: "http://www.google.com",
    },
    {
      name: "Vibrant Series",
      id: "http://www.google.com",
    },
    {
      name: "Matte Series",
      id: "http://www.google.com",
    },
    {
      name: "Sparkle Series",
      id: "http://www.google.com",
    },
    {
      name: "Grunge Series",
      id: "http://www.google.com",
    },
    {
      name: "Neon Series",
      id: "http://www.google.com",
    },
    {
      name: "Plastic Series",
      id: "http://www.google.com",
    },
    {
      name: "Special Edition Series",
      id: "http://www.google.com",
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

  return (
    // <div className={clsx("", className)}>
    <>
      <div className={`${styles.bgcolor} w-screen xs:h-[120vh] md:h-[50vh]`}>
        <div
          className={`w-screen xs:h-[10%] md:h-[50%] grid xs:grid-cols-1 md:grid-cols-4 pt-[60px]`}
        >
          <div className={`col-span-2`}>
            <div className={`grid grid-rows-3`}>
              <div
                className={`${styles.thetitle} xs:pl-6 md:pl-16 open-sans-700 text-[16px] mt-[5px]`}
              >
                <span className={`permanent-marker xs:text-4xl md:ext-7xl`}>
                  SPRAY IT!
                </span>
                <br />
                And get In Touch with us:&nbsp;
                <span className={`underline cursor-pointer`}>
                  hello@airusal.ca
                </span>
                <br />
              </div>
              <div
                className={`${styles.thetitle} xs:pl-6 md:pl-16 text-lg xs:mt-[20px] md:mt-[35px]`}
              >
                <span className={`permanent-marker xs:text-xl md:text-4xl`}>
                  Follow Us
                </span>
                <br />
                <div className={`flex flex-row color-offwhite`}>
                  {socialicons.map((link, index) => (
                    <div
                      className="social-media-links relative mt-[10px]"
                      key={index}
                    >
                      <div
                        className="flex w-8 h-8 z-50 opacity-70 absolute cursor-pointer"
                        onMouseOver={() => {
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
                          gsap.to(`${".big-menu-sociallink" + index}`, {
                            duration: 0.3,
                            color: hovercolor,
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
                        className={`flex flex-col justify-end text-3xl pl-2 z-10 ${"big-menu-sociallink" + index}`}
                        ref={submenulinks}
                      >
                        <Link
                          href={link.id}
                          target="_blank"
                          className="flex xs:flex-col sm:flex-row cursor-default"
                        >
                          {link.icon}
                          <span
                            className={`text-sm xs:ml-[-15px] sm:ml-[5px] mt-[5px] open-sans-500 opacity-0 ${"big-menu-sociallink-label" + index}`}
                          >
                            {link.name}
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`open-sans-700 text-[16px] xs:pl-6 md:pl-16 xs:mt-[25px] md:mt-[30px]`}
              >
                Eh buddy hoser <br /> we&apos;re from Toronto, Canada, Eh.
              </div>
            </div>
          </div>
          {isbig && (
            <div>
              <div className={`open-sans-900 text-xl`}>
                <div className={`flex flex-col mt-[-5px] color-offwhite`}>
                  <div
                    className={`permanent-marker xs:text-xl md:text-4xl xs:pl-6 xs:mt-[25px] md:mt-[30px]`}
                  >
                    PRODUCTS
                  </div>
                  {productslinks.map((link, index) => (
                    <div
                      key={index}
                      className="products-links relative xs:pl-6 mt-[10px]"
                    >
                      <div
                        className={`flex xs:flex-row md:flex-col justify-end z-10 ${"products" + index}`}
                        onMouseOver={() => {
                          gsap.to(`${".products" + index}`, {
                            duration: 0.3,
                            color: "#000000",
                            ease: "expo.InOut",
                          });
                        }}
                        onMouseLeave={() => {
                          gsap.to(`${".products" + index}`, {
                            duration: 0.3,
                            color: "#f2f2f2",
                            ease: "expo.InOut",
                          });
                        }}
                      >
                        <Link
                          href={link.id}
                          target="_blank"
                          className="flex flex-row cursor-pointer open-sans-700 text-[16px] underline"
                        >
                          {link.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex flex-col mt-[-5px] color-offwhite`}>
                <div className={`permanent-marker text-4xl mt-[30px]`}>
                  COMPANY
                </div>
                <div className={`open-sans-700 text-[16px] pr-[30px]`}>
                  We make great products for people just like you. We&apos;re a
                  small shop located in the Great White North (not really,
                  we&apos;re in Toronto)
                </div>
              </div>
            </div>
          )}
          {isnotbig && (
            <div>
              <div className={`grid grid-col-1`}>
                <div className={`flex flex-col mt-[-5px] color-offwhite`}>
                  <div className={`permanent-marker pl-6 text-xl mt-[15px]`}>
                    COMPANY
                  </div>
                  <div className={`open-sans-700 text-[16px] pl-6 pr-6`}>
                    We make great products for people just like you. We&apos;re
                    a small shop located in the Great White North (not really,
                    we&apos;re in Toronto)
                  </div>
                </div>
                <div className={`flex flex-col open-sans-900 text-xl`}>
                  <div className={`flex flex-col mt-[-5px] color-offwhite`}>
                    <div className={`permanent-marker text-xl pl-6 mt-[30px]`}>
                      PRODUCTS
                    </div>
                    {productslinks.map((link, index) => (
                      <div
                        key={index}
                        className="products-links relative pl-6 mt-[10px]"
                      >
                        <div
                          className={`flex flex-row z-10 ${"products" + index}`}
                          onMouseOver={() => {
                            gsap.to(`${".products" + index}`, {
                              duration: 0.3,
                              color: "#000000",
                              ease: "expo.InOut",
                            });
                          }}
                          onMouseLeave={() => {
                            gsap.to(`${".products" + index}`, {
                              duration: 0.3,
                              color: "#f2f2f2",
                              ease: "expo.InOut",
                            });
                          }}
                        >
                          <Link
                            href={link.id}
                            target="_blank"
                            className="flex flex-row cursor-pointer open-sans-700 text-[16px] underline"
                          >
                            {link.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
