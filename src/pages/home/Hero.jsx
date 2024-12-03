import React, { useContext } from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import BasicToolTip from "../../components/BasicToolTip";
import TooltipButton from "../../components/TooltipButton";
import BgImg from "../../assets/hero.jpg";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section
      className={`relative h-screen bg-cover bg-center text-black`}
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* Main content */}
      <div className="relative pt-18 sm:pt-30 md:pt-40 px-4 text-center md:w-1/2 mx-auto space-y-8 flex flex-col justify-center h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:w-2/3 mx-auto">
          Turn your room with KENWUD into a lot more minimalist and modern with ease and speed
        </p>
      </div>

      {/* Overlay with small bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/* Tooltip buttons */}
      <div className="hidden xl:block absolute bottom-40 left-24">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-24 right-[820px]">
        <TooltipButton position="bottom" />
      </div>

      {/* Dark and Light Mode toggle */}
      <div className="absolute bottom-16 right-16 z-40">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-4 md:p-5 rounded-full"
        >
          {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
