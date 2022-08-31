import React from "react";



function Navbar() {


    return (<div className=" text-violet-900 flex  text-justify  h-20 ">

        <div className="my-auto ml-20 mr-12 font-bold text-4xl"> <a href="">Navtek.</a></div>
        <div className="text-lg  my-auto mx-7"><a href="#"> Features </a></div>
        <div className=" text-lg my-auto mx-7"> <a href="#">Pricing </a></div>
        <div className=" text-lg my-auto mx-7"><a href="#"> Book a demo</a></div>
        <div className="btns">
            <button className=" h-10 my-auto mr-3 ml-auto   text-violet-900 font-semibold  hover:bg-gray-300 py-auto px-3 border-2 border-blue-900  rounded hover:shadow">Log In</button>
            <button className=" h-10 my-auto mr-20    text-violet-900 font-semibold  hover:bg-gray-300 py-auto px-3 border-2 border-blue-900  rounded hover:shadow">Sign Up</button>
        </div>
    </div >
    );
}

export default Navbar;