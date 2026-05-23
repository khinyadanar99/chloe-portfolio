import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function HeroCard() {
  const socialLinks = [
    { id: 1, icon: faGithub, url: "https://github.com/khinyadanar99" },
    { id: 2, icon: faLinkedin, url: "https://www.linkedin.com/in/chloe-aung/" }
  ];

  return (
    <div className="w-full min-h-[60vh] mx-auto flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 py-16 rounded-[40px] bg-white/30 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden relative">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-300/30 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-200/30 blur-3xl rounded-full"></div>

    {/* LEFT SIDE */}
    <div className="flex-1 z-10">

        {/* Small Role Badge */}
        {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-300 bg-white/40 backdrop-blur-md mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <p className="text-sm font-medium text-purple-700">
                Frontend Developer & UI Designer
            </p>
        </div> */}

        {/* Main Heading */}
        <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Chloe
            </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg lg:text-xl text-gray-700 max-w-xl leading-relaxed">
            I build{" "}
            <span className="text-purple-500 font-semibold">modern</span>,{" "}
            <span className="text-blue-400 font-semibold">accessible</span>{" "}
            and{" "}
            <span className="text-pink-400 font-semibold">beautiful</span>{" "}
            web experiences that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

            <Link
                to="/projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-400 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
            >
                View My Work →
            </Link>

            <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl border border-gray-300 bg-white/50 backdrop-blur-md text-gray-800 font-medium hover:bg-white transition duration-300"
            >
                Let's Connect
            </Link>

        </div>

        <div className="flex gap-5 mt-10 items-center">
            <p>Find me on</p>
            {/* Social Links */}
            <div className="flex items-center gap-4">

                {socialLinks.map((socialLink, index) => {
                    return (
                        <Link
                            key={index}
                            to={socialLink.url}
                            target="_blank"
                            className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl text-gray-700 hover:scale-110 hover:bg-white transition duration-300 shadow-md"
                        >
                            <FontAwesomeIcon icon={socialLink.icon} />
                        </Link>
                    );
                })}

            </div>
        </div>
        

        {/* Bottom Info */}
        <div className="flex flex-wrap items-center gap-6 mt-10 text-gray-600 text-sm">

            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <p>Based in London, UK</p>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Open to opportunities</p>
            </div>

        </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 flex items-center justify-center relative mt-16 lg:mt-0 z-10">
        <img
            src="/hero.png"
            alt="Hero"
            className="relative w-[380px] lg:w-[500px] object-contain drop-shadow-2xl"
        />

        {/* Floating Cards */}
        <div className="absolute top-3 left-0 hidden lg:block glass_card p-5 rounded-3xl shadow-xl bg-white/50 backdrop-blur-xl hover:scale-105 transition duration-500">
            <h3 className="font-semibold text-lg">Clean Code</h3>
            <p className="text-gray-600 text-sm mt-1">
                Scalable & maintainable solutions
            </p>
        </div>

        <div className="absolute bottom-5 left-0 hidden lg:block glass_card p-5 rounded-3xl shadow-xl bg-white/50 backdrop-blur-xl hover:scale-105 transition duration-500">
            <h3 className="font-semibold text-lg">Performance</h3>
            <p className="text-gray-600 text-sm mt-1">
                Fast, optimized and user-friendly websites
            </p>
        </div>

        <div className="absolute bottom-[45%] -right-15 hidden lg:block glass_card p-5 rounded-3xl shadow-xl bg-white/50 backdrop-blur-xl hover:scale-105 transition duration-500">
            <h3 className="font-semibold text-lg">UI/UX Focused</h3>
            <p className="text-gray-600 text-sm mt-1">
                Designing intuitive experiences
            </p>
        </div>

        {/* Main Image */}
        

    </div>
</div>
  );
}

export default HeroCard;
