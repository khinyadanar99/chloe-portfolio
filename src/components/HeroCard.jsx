import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function HeroCard() {
  const socialLinks = [
    { id: 1, icon: faGithub, url: "https://github.com/khinyadanar99", label: "GitHub Profile" },
    { id: 2, icon: faLinkedin, url: "https://www.linkedin.com/in/chloe-aung/", label: "LinkedIn Profile" },
  ];

  return (
    <div className="w-full min-h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-5 sm:gap-20 lg:gap-12 relative">
        <div className="lg:flex-1 w-full text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Chloe
            </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-full mx-auto lg:mx-0 leading-relaxed">
            I build{" "}
            <span className="text-purple-500 font-semibold">modern</span>,{" "}
            <span className="text-blue-400 font-semibold">accessible</span> and{" "}
            <span className="text-pink-400 font-semibold">beautiful</span> web
            experiences that make an impact.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
            <a
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-linear-to-r from-purple-500 to-pink-400 text-white text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
                View My Work
            </a>

            <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 glass_card text-gray-800 text-sm sm:text-base font-medium hover:scale-105 cursor-pointer"
            >
                Let's Connect
            </a>
            </div>

            <div className="flex gap-3 sm:gap-5 mt-8 sm:mt-10 items-center justify-center lg:justify-start">
            <p className="text-sm sm:text-base text-gray-700">Find me on</p>
            <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((socialLink) => (
                <Link
                    key={socialLink.id}
                    to={socialLink.url}
                    target="_blank"
                    label={socialLink.label}
                    aria-label={socialLink.label}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:scale-110 hover:bg-white transition duration-300 shadow-md"
                >
                    <FontAwesomeIcon icon={socialLink.icon} />
                </Link>
                ))}
            </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 text-secondary text-xs sm:text-sm">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full shrink-0" />
                <p>Based in London, UK</p>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
                <p>Open to opportunities</p>
            </div>
            </div>
        </div>

        <div className="lg:flex-1 flex items-center justify-center relative w-full max-w-xs sm:max-w-md lg:max-w-none z-10 drop-shadow-sm px-6">
            <img
            src="/hero.webp"
            alt="Hero"
            className="relative w-lg sm:max-w-104 xl:max-w-130 object-contain drop-shadow-2xl"
            />

            <div className="absolute -top-3 -left-10 hidden sm:block glass_card hover:scale-105 p-4">
            <p className="font-semibold text-lg">Clean Code</p>
            <p className="text-secondary text-sm mt-1">
                Scalable & maintainable solutions
            </p>
            </div>

            <div className="absolute -bottom-10 left-0 hidden sm:block glass_card hover:scale-105 p-4">
            <p className="font-semibold text-lg">Performance</p>
            <p className="text-secondary text-sm mt-1">
                Fast, optimized and user-friendly websites
            </p>
            </div>

            <div className="absolute bottom-[45%] -right-12 hidden sm:block glass_card hover:scale-105 p-3">
            <p className="font-semibold text-lg">UI/UX Focused</p>
            <p className="text-secondary text-sm mt-1">
                Designing intuitive experiences
            </p>
            </div>
        </div>
    </div>
  );
}

export default HeroCard;
