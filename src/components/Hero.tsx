"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "@/stores/navStore";
import DiamondSVG from "./DiamondSvg";

import { useGSAP } from "@gsap/react";
import NavbarContent from "./navbarContent";
import SvgContent from "./SvgContent";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isToggle = useStore((state) => state.isToggle);
  const diamondRef = useRef(null);
  const heroRef = useRef(null);
  const innerHeroRef = useRef(null);
  const textContentRef = useRef(null);

  useGSAP(() => {
    if (isToggle || !diamondRef.current) return;

    // Define your min/max scales
    const minScale = 1;
    const maxScale = 30;

    // Floating animation
    const floatTween = gsap.to(diamondRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1,
    });

    // Create a ScrollTrigger that spans the entire page
    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",

      scrub: true,
      onUpdate(self) {
        // self.progress goes from 0 → 1
        const scale = minScale + self.progress * (maxScale - minScale);
        const blurAmount = self.progress * 10; // Max blur of 10px
        const opacity = 1 - self.progress * 0.7; // Fade to 30% opacity

        // Scale the diamond
        gsap.set(diamondRef.current, {
          scale,
          transformOrigin: "center center",
          // rotate: 30,
          yoyo: true,
        });

        // Apply blur and fade to text content only
        gsap.set(textContentRef.current, {
          yoyo: true,
          ease: "expoScale(1,5)",
          filter: `blur(${blurAmount}px)`,
          opacity: opacity,
        });
      },
    });

    return () => {
      floatTween.kill();
      trigger.kill();
    };
  }, [isToggle]);

  return (
    <>
      <div ref={heroRef} className="min-h-screen relative">
        <div ref={innerHeroRef}>
          {isToggle ? (
            <NavbarContent />
          ) : (
            <div className="font-array-bold flex flex-col items-center px-4 py-8 mt-24 md:mt-0 relative">
              {/* Text content that will be blurred */}
              <div ref={textContentRef} className="text-content">
                <div className="hero-text text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] 2xl:text-[200px] leading-none text-center">
                  FANTASTIC
                </div>
                <div className="hero-text text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] 2xl:text-[200px] leading-none text-center -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 xl:-mt-12 2xl:-mt-16">
                  WEB DEV
                </div>
                <div className="hero-text mt-4 sm:mt-6 md:mt-8">
                  <h1 className="font-author-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-pink-300 text-center px-4 max-w-4xl">
                    That Can only be the work of black magic
                  </h1>
                </div>
              </div>

              {/* Diamond that stays sharp */}
              <div
                ref={diamondRef}
                className="diamond-container will-change-transform relative z-30 mt-8"
              >
                <DiamondSVG />
              </div>
              <div className="w-screen place-items-center h-[90%]">
                <SvgContent />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
