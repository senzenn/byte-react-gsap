"use client";
import { motion } from "motion/react";
import useStore from "../stores/navStore"; // Import your store

const Navbar = () => {
  const isToggle = useStore((state) => state.isToggle);
  const handleClick = useStore((state) => state.setIsToggle);

  return (
    <>
      <div
        className={`${
          !isToggle ? "flex" : "hidden"
        } place-items-center sm:mx-6 -mt-16 md:pl-8 md:pr-8 sm:mt-6 grid grid-flow-col justify-between items-center font-medium`}
      >
        <div className="-py-2 sm:py-6 md:py-1">
          <h1 className="text-xl sm:text-2xl md:text-4xl cursor-pointer lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
            BLACK
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl cursor-pointer lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight -mt-1 sm:-mt-2 md:-mt-3">
            MAGIC
          </h1>
        </div>
        <div className="py-2 sm:py-3 md:py-4">
          <motion.button
            onClick={handleClick}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-pink-300 xl:text-4xl 2xl:text-5xl"
          >
            {isToggle ? "CLOSE" : "MENU"}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
