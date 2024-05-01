"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image"; 

export default function HeroSection() {
  return (
    
    <section id="home" className='min-h-screen h-full w-full grid items-center grid-cols-2 px-[10%] gap-[4em] bg-[#081b29]'>
        <div className="max-w-screen-sm">
            <h1 className='font-extrabold text-5xl text-[#ffffff] mb-[10px]'>Hi! I'm Pramod</h1>
            <div className="text-2xl font-semibold">
                <h3 className='inline-flex m-0 align-top text-[#ffffff]'>And I'm &nbsp;</h3>
                <h3 className='inline-flex m-0 align-top'>

                <TypeAnimation className='bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text font-extrabold absolute flex text-3xl'
                    sequence={[
                        "Student",
                        2000,
                        "Frontend Developer",
                        2000,
                        "Game Developer",
                        2000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                />

                </h3>
                <p className='leading-relaxed text-[#bdbdbd] mt-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, mollitia.</p>
                <div className="inline-flex justify-between items-center mt-4 mx-0 mb-8 w-80">
                    <h5 className='font-semibold text-[#f5f5f5] text-base'>Email :</h5>
                    <span className='text-sm text-[#bdbdbd]'> pramodchalise122@gmail.com</span>
                </div>
            </div>

            <div className="inline-flex justify-between w-80 h-11">
                <a href="#" className="inline-flex justify-center items-center w-36 h-[100%] text-[#081b29] bg-[#12f7ff] text-base tracking-widest font-semibold rounded-md relative overflow-hidden z-1 border border-[#12f7ff] hover:text-[#12f7ff] hover:bg-[#081b29] hover:border-[#12f7ff]">Download CV</a>

                <a href="#" className="inline-flex justify-center items-center w-36 h-[100%] text-[#081b29] bg-[#12f7ff] text-base tracking-widest font-semibold rounded-md relative overflow-hidden z-1 border border-[#12f7ff] hover:text-[#12f7ff] hover:bg-[#081b29] hover:border-[#12f7ff]">Hire Me Now!</a>
            </div>

            <div class="social-icons">
                <a href=""><i class="bx bxl-facebook"></i></a>
                <a href=""><i class="bx bxl-instagram"></i></a>
                <a href=""><i class="bx bxl-github"></i></a>
                <a href=""><i class="bx bxl-whatsapp"></i></a>
            </div>
        </div>

        <div className="relative mt-5">
            <div className="text-center">
                <img className='rounded-[30px] max-w-md w-[100%] h-[auto]' src="/received_521628159513594.jpeg"></img>
            </div>
        </div>
    </section>
  )
}
