"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const animatePageIn = (scope: HTMLElement) => {
  const tl = gsap.timeline();

  tl.set(".banner", { yPercent: 0 }) // start in view
    .to(".banner", {
      yPercent: 100, // slide up and away
      stagger: 0.3,
      ease: "power4.inOut",
    });
};

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2️⃣ – run GSAP inside a scoped context every time the component mounts
  useGSAP(
    () => {
      animatePageIn(containerRef.current!);
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      {/* 3️⃣ – give every column the shared class "banner" */}
      <div className="banner min-h-screen fixed top-0 left-0    w-1/4 bg-white z-10" />
      <div className="banner min-h-screen fixed top-0 left-1/4  w-1/4 bg-white z-10" />
      <div className="banner min-h-screen fixed top-0 left-2/4  w-1/4  bg-white z-10" />
      <div className="banner min-h-screen fixed top-0 left-3/4  w-1/4   bg-white  z-10" />

      {children}
    </div>
  );
}
