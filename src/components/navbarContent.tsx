"use client";

import { motion } from "motion/react"; // still fine for micro-UX
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useStore from "../stores/navStore";

gsap.registerPlugin(useGSAP);

const NavbarContent = () => {
  const isToggle = useStore((s) => s.isToggle);
  const handleClick = useStore((s) => s.setIsToggle);

  /* refs */
  const pageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null); // curved mask path

  /* ─────────────────────────────────  GSAP MASK TIMELINE  */
  useGSAP(
    () => {
      /* Bézier strings for closed ↔ open curve */
      const START = "M0 0H100V0Q50 0 0 0Z"; // fully above
      const MID = "M0 0H100V40Q50 55 0 40Z"; // bowed curve
      const END = "M0 0H100V100Q50 100 0 100Z"; // fully below

      gsap.set(pathRef.current, { attr: { d: START } });

      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      /* ENTER: bow down then wipe */
      tl.to(pathRef.current, { attr: { d: MID }, duration: 0.45 }).to(
        pathRef.current,
        { attr: { d: END }, duration: 0.45 },
        "<20%",
      );

      /* EXIT (optional): reverse with recoil */
      tl.add(() =>
        gsap
          .timeline({ defaults: { ease: "power3.inOut" } })
          .to(pathRef.current, { attr: { d: MID }, duration: 0.4 })
          .to(pathRef.current, { attr: { d: START }, duration: 0.5 }),
      );
    },
    { scope: pageRef },
  );

  /* navData & socials stay unchanged */
  const navData = [
    { id: 1, name: "ABOUT", href: "https://heyblackmagic.com/about" },
    { id: 2, name: "WHAT WE DO", href: "https://heyblackmagic.com/what-we-do" },
    { id: 3, name: "WORK", href: "https://heyblackmagic.com/work" },
    {
      id: 4,
      name: "WHITE MAGIC",
      href: "https://heyblackmagic.com/white-magic",
    },
    { id: 5, name: "SCRIPTURES", href: "https://heyblackmagic.com/blog" },
    { id: 6, name: "CONTACT", href: "https://heyblackmagic.com/contact" },
  ];

  const socials = [
    {
      id: 1,
      name: "Instagram",
      short: "IG",
      href: "https://www.instagram.com/heyblackmagic/",
    },
    {
      id: 2,
      name: "Facebook",
      short: "FB",
      href: "https://www.facebook.com/heyblackmagic/",
    },
    {
      id: 3,
      name: "Twitter",
      short: "TW",
      href: "https://www.twitter.com/heyblackmagic/",
    },
    {
      id: 4,
      name: "LinkedIn",
      short: "IN",
      href: "https://www.linkedin.com/company/heyblackmagic/",
    },
    {
      id: 5,
      name: "CAREERS",
      short: "CR",
      href: "https://heyblackmagic.com/careers",
    },
  ];

  /* ─────────────────────────────────────────  JSX  */
  return (
    <div
      ref={pageRef}
      className="relative overflow-hidden bg-pink-200 min-h-screen flex flex-col"
    >
      {/*  CURVED SVG MASK  */}
      <svg
        className="absolute inset-0 z-50 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} fill="#0c0c0c" />
      </svg>

      {/*  HEADER  */}
      <div className="header-section">
        <div className="sm:mx-6 -mt-18 md:pl-30 md:pr-20 sm:mt-6 grid grid-flow-col justify-between items-center font-author-medium">
          <div className="-py-2 sm:py-6 md:py-1">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
              BLACK
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight -mt-1 sm:-mt-2 md:-mt-3">
              MAGIC
            </h1>
          </div>

          <div className="py-2 sm:py-3 md:py-4">
            <motion.button
              onClick={handleClick}
              whileTap={{ scale: 0.9 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-pink-300 xl:text-4xl 2xl:text-5xl"
            >
              {isToggle ? "CLOSE" : "MENU"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* NAV LINKS */}
      <nav className="flex flex-col items-center justify-center mt-8 space-y-3">
        {navData.map((n) => (
          <div key={n.id}>
            <a
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-7xl font-semibold tracking-wide hover:text-pink-400 transition-colors duration-200"
            >
              {n.name}
            </a>
          </div>
        ))}
      </nav>

      {/* SOCIAL ICONS */}
      <div className="flex flex-row justify-center space-x-24 mt-10">
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            title={s.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl text-white hover:text-pink-700"
          >
            {s.short}
          </a>
        ))}
      </div>

      {/* FOOTER LINKS */}
      <div className="text-4xl space-x-12 flex items-center justify-center mt-12">
        <button className="hover:text-black">hello@heyblackmagic.com</button>
        <button className="hover:text-black">Privacy policy</button>
        <button className="hover:text-black">Accessibility</button>
      </div>
    </div>
  );
};

export default NavbarContent;
