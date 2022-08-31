import React from "react";

function Footer() {
    return (
        <div className=" text-violet-900 mt-10 md:flex md:flex-row md:justify-evenly ">
            <div className="   flex  ">
                <div className="  flo w-64 text-6xl">Navtek
                </div>
                <div className="  oli w-30 text-center md:flex md:flex-row md:justify-evenly">
                    <h2 className="my-2  md:mx-3 " >About</h2>
                    <h2 className="my-2  md:mx-3 " >Privacy Policy</h2>
                    <h2 className="my-2  md:mx-3 " >T and C</h2>
                    <h2 className="my-2  md:mx-3 " >GDPR</h2>
                    <h2 className="my-2  md:mx-3 " >Contact</h2>
                </div>

            </div>
            <div className="com text-sm text-center mt-3  text-gray-600  ">
                A product of XYZ company.copyright 2022.All rights reserved</div>
        </div>

    );
}

export default Footer;