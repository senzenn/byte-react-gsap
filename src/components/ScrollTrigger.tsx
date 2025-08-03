"use client";
import { useRef } from "react";

const ScrollTrigger = () => {
  const containerRef = useRef(null);
  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-screen max-w-full bg-black border-2 box-border my-2 p-1"
      >
        Scroll Trigger
      </div>
    </>
  );
};

export default ScrollTrigger;
