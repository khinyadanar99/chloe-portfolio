import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">

            <div className="flex items-center justify-between px-8 py-4 rounded-3xl 
            bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                        Chloe
                    </h1>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex items-center gap-10 text-secondary font-medium">

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

                <button aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} className="md:hidden" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>

            </div>

            {isOpen && (
                <div className="md:hidden mt-3 rounded-3xl bg-white/90 backdrop-blur-md shadow-lg">
                <ul className="flex flex-col py-4">
                    <li className="border-b border-gray-200">
                    <a
                        href="#home"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </a>
                    </li>

                    <li className="border-b border-gray-200">
                    <a
                        href="#about"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        About
                    </a>
                    </li>

                    <li className="border-b border-gray-200">
                    <a
                        href="#skills"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        Skills
                    </a>
                    </li>

                    <li className="border-b border-gray-200">
                    <a
                        href="#projects"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        Projects
                    </a>
                    </li>

                    <li className="border-b border-gray-200">
                    <a
                        href="#education"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        Education
                    </a>
                    </li>

                    <li>
                    <a
                        href="#contact"
                        className="block px-6 py-3 hover:bg-purple-50"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            )}
        </nav>
     )
}

export default Navbar