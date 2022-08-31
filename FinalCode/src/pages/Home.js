import React, { useState } from "react";
import validator from 'validator'

import img1 from "../assets/img1.jpg"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import t1 from "../assets/t1.jpg"
import f1 from "../assets/f1.jpg"
import f2 from "../assets/f2.jpg"
import sc1 from "../assets/sc1.jpg"
import sc3 from "../assets/sc3.jpg"


var sectionStyle = {
    width: "100%",
    height: "200px",
    backgroundImage: `url(${t1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};



function Home() {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    return (<>
        <div className="left flex-col flex   list-none pt-10 md:flex-row md:justify-center md:gap-x-20"  >
            <div className="left flex-col flex   list-none pt-10">
                <h3 className="mx-auto text-violet-900 uppercase font-bold my-3 text-6xl mt-4 md:text-8xl">Product</h3>
                <h6 className="mx-auto text-violet-900 my-3 text-3xl">Desciprtion</h6>

                <button className=" h-10 my-3 mx-2  text-xl  text-violet-900 font-semibold  hover:bg-gray-300 py-auto px-3 border-2 border-blue-900  rounded hover:shadow">Book A Demo</button>
            </div>
            <img src={img1} alt="Logo" className="h-auto   rounded-3xl w-screen md:h-12 md:w-auto" />
        </div>
        <div className="mx-auto text-violet-900 uppercase font-bold my-3 text-5xl mt-4 md:text-center lg:my-96">
            Simple platform for organizing shift
        </div>
        <div className="flex flex-col gap-y-2 justify-center md:flex md:flex-row md:gap-x-14  ">
            <div className=" flex-col flex   list-none ">
                <img src={c1} alt="Logo" className=" w-auto mx-auto my-10 justify-center rounded-3xl  shadow h-80" />
                <h3 className="mx-auto text-violet-900 uppercase font-bold my-1 text-3xl mt-2">Employee Tracking</h3>
                <h6 className="mx-auto text-violet-900 my-1 text-2xl">This is a desciption</h6>
            </div>
            <div className="flex-col flex   list-none">
                <img src={c2} alt="Logo" className="   w-auto mx-auto my-10 justify-center rounded-3xl  shadow h-80" />
                <h3 className="mx-auto text-violet-900 uppercase font-bold my-1 text-3xl mt-2">Electronic Time Sheet</h3>
                <h6 className="mx-auto text-violet-900 my-1 text-2xl">This is a desciption</h6>
            </div>
            <div className="flex-col flex   list-none">
                <img src={c3} alt="Logo" className="  h-80 w-auto mx-auto my-10 justify-center rounded-3xl  shadow" />
                <h3 className="mx-auto text-violet-900 uppercase font-bold my-1 text-3xl mt-2">Booking Management</h3>
                <h6 className="mx-auto text-violet-900 my-1 text-2xl">This is a desciption</h6>
            </div>
        </div>
        <section style={sectionStyle} className="text-6xl m-auto flex justify-center pt-20 text-white mt-5 ">
            Future Is Now
        </section>

        <div className="left flex-col-reverse flex   list-none pt-10 md:flex-row-reverse md:justify-center md:gap-x-56 md:my-40"  >
            <div className="left flex-col flex   list-none pt-10 md:mr-40">
                <h3 className="mx-auto w-64 text-violet-900 uppercase font-bold my-3 text-6xl mt-4 md:text-8xl">Quiz for engagement</h3>
                <h6 className="mx-auto w-60 text-violet-900 my-3 text-3xl">This is a block and will provide you info for why you need to click this button</h6>

                <button className=" h-10 my-8 mx-2  text-xl  text-violet-900 font-semibold  hover:bg-gray-300 py-auto px-3 border-2 border-blue-900  rounded hover:shadow">Book A Demo</button>
            </div>
            <img src={f2} alt="Logo" className="h-auto max-h-96 md:mt-24 md:mr-2 rounded-3xl w-screen md:h-20 md:w-96" />
        </div>
        <div className="left flex-col-reverse flex   list-none pt-10 md:flex-row md:justify-center md:gap-x-32 md:my-32 "  >
            <div className="left flex-col flex  md:mr-40 list-none pt-10">
                <h3 className="mx-auto w-96 text-violet-900 uppercase font-bold my-3 text-6xl mt-4 md:text-8xl">Setup suppport</h3>
                <h6 className="mx-auto w-96 text-violet-900 my-3 text-3xl">This is a block and will provide you info for why you need to click this button</h6>

                <button className=" h-10 my-8 mx-2  text-xl  text-violet-900 font-semibold  hover:bg-gray-300 py-auto px-3 border-2 border-blue-900  rounded hover:shadow">Book A Demo</button>
            </div>
            <img src={f1} alt="Logo" className="h-auto max-h-96 md:mt-24 md:mr-2 rounded-3xl w-screen md:h-20 md:w-96 " />
        </div>
        <div className="text-5xl  text-violet-900 flex justify-center mt-6">Tesitmonials</div>
        <div className="text-3xl  text-violet-800 flex justify-center mt-2">People Love this!</div>
        <div className="test flex justify-center items-center md:justify-around lg:justify-evenly">
            <div className="t1 flex-col justify-center mt-10 text-center w-32 items-center ">
                <div className="ttxt ">"This product is so cool and creates so much value for money bla bla bla"</div>
                <div className="flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </div>
                <div className="name">first last name</div>
            </div>
            <div className="t1 flex-col justify-center mt-10 text-center w-32 items-center ">
                <div className="ttxt ">"This product is so cool and creates so much value for money bla bla bla"</div>
                <div className="flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </div>
                <div className="name">first last name</div>
            </div>
            <div className="t1 flex-col justify-center mt-10 text-center w-32 items-center ">
                <div className="ttxt ">"This product is so cool and creates so much value for money bla bla bla"</div>
                <div className="flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </div>
                <div className="name">first last name</div>
            </div>
        </div>
        <div className="text-5xl  text-violet-900 flex justify-center mt-20 md:text-center">Scheduling software for all business</div>
        <div className="cards flex mt-10 md:justify-center gap-5 ">
            <div className="cleft flex flex-col md:flex-row md:justify-center gap-5 ">
                <div className="c1 flex-col text-center md:justify-evenly gap-5">
                    <img src={sc1} alt="Logo" className=" md:h-40 shadow rounded" />
                    <a href="#">Care homes</a>
                </div>
                <div className="c1 flex-col text-center md:justify-evenly  gap-5">
                    <img src={sc3} alt="Logo" className=" md:h-40 shadow rounded" />
                    <a href="#">Healthcare</a>
                </div>
            </div>
            <div className="cleft flex flex-col  md:flex-row md:justify-evenly gap-5 ">
                <div className="c1 flex-col text-center md:justify-evenly gap-5">
                    <img src={sc3} alt="Logo" className=" md:h-40  shadow rounded" />
                    <a href="#">Restaurant cafes and bar</a>
                </div>
                <div className="c1 flex-col text-center md:justify-evenly gap-5">
                    <img src={sc1} alt="Logo" className=" md:h-40 shadow rounded" />
                    <a href="#">Professional services</a>
                </div>
            </div>
        </div>
        <div className="nsltr">
            <div className="nsttxt mt-32"><h1 className="text-violet-900 text-center first-line:uppercase font-bold my-3 text-6xl  md:text-8xl ">Newsletter</h1></div>
            <div className="epat1 flex-col  mt-10 text-center w-auto test flex justify-center items-center md:justify-around lg:justify-evenly">
                <div className="eea w-96">

                    <pre>

                        <input type="text" id="userEmail" className="email w-80 text-center border-2 border-blue-500 rounded" placeholder="Please enter your email"
                            onChange={(e) => validateEmail(e)}></input> <br />
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{emailError}</span>

                    </pre>

                </div>
                <button class="test flex justify-center items-center border-2 md:justify-around lg:justify-evenly bg-blue-200 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4  border-blue-200 rounded shadow">
                    Subscribe
                </button>
            </div>
        </div>
    </>
    );
}

export default Home;