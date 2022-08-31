import React from "react";
import nav from "../assets/nav.png"

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 shadow">
                <div className="container px-4 ml-3 mr-auto flex flex-wrap items-center  justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  ">
                        <a
                            className="md:text-5xl my-auto lg:ml-20 mr-12 font-bold  text-4xl leading-relaxed inline-block py-2  whitespace-nowrap uppercase text-violet-900"
                            href="#bha"
                        >
                            Navtek.
                        </a>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img src={nav} alt="Logo" className="h-10" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex  items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }

                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-0">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center md:text-3xl uppercase font-bold leading-snug text-violet-900 hover:opacity-75"
                                    href="#bha"
                                >
                                    <i className="   text-violet-900 opacity-75"></i><span className="ml-2">Features</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center md:text-3xl uppercase font-bold leading-snug text-violet-900 hover:opacity-75"
                                    href="#bha"
                                >
                                    <i className="  md:text-6xl text-violet-900 opacity-75"></i><span className="ml-2">Pricing</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center md:text-3xl uppercase font-bold leading-snug text-violet-900 hover:opacity-75"
                                    href="#bha"
                                >
                                    <i className=" md:text-6xl  text-violet-900 opacity-75"></i><span className="ml-2">Book a demo</span>
                                </a>
                            </li>
                            <li className="nav-item">

                                <button className=" h-10 my-auto mx-2 md:h-12   md:text-2xl text-violet-900 lg:font-semibold  hover:bg-gray-300 py-auto px-3 lg:border-2 lg:border-blue-900  rounded hover:shadow">Log In</button>
                            </li>
                            <li className="nav-item">
                                <button className=" h-10 my-auto mx-2 md:h-12  md:text-2xl   text-violet-900 lg:font-semibold  hover:bg-gray-300 py-auto px-3 lg:border-2 lg:border-blue-900  rounded hover:shadow">Sign Up</button>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}