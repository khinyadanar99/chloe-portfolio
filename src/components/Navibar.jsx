import React from 'react'

function Navibar() {
    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">

            <div className="flex items-center justify-between px-8 py-4 rounded-3xl 
            bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                        Chloe
                    </h1>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

                    <li>
                        <a
                            href="#home"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#education"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Education
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-2xl text-gray-700">
                    ☰
                </button>

            </div>
        </nav>
     )
}

export default Navibar