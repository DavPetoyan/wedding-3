import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";


export default function Map() {
    return (
        <>
            <div className="w-full relative flex  mt-6 flex-col justify-center items-center pt-12">
                <motion.div className="medMapTrchun2  w-[112px] h-[94px] absolute  top-10 left-8"
                    animate={{
                        y: [0, -8, 0],
                        x: [0, -6, 0],
                        rotate: [4, -2, 4],
                    }}
                    transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}>
                    <Image src="/mapTrchun2.svg" alt="" fill />
                </motion.div>
                <div className="medMapImg1 w-[408px] h-[295px] relative">
                    <Image src="/church.svg" alt="" fill className="object-contain" />
                </div>
                <div className="text-center">
                    <p className="medMapImgText text-[#3D521E] font-bold font-noto-armenian text-[18px] leading-[136%] ">Պսակադրության արարողություն 14:30</p>
                    <p className="medMapImgText text-[#3D521E] font-normal font-noto-armenian text-[18px] leading-[136%]">Զորավոր Սուրբ Աստվածածին Եկեղեցի</p>
                </div>
                <Link href="https://www.google.com/maps?q=Holy+Mother+of+God+the+Mighty+Church,+9+Ghazar+Parpetsi+St,+Yerevan+0002&ftid=0x406abd1d11bff0fd:0x9a1da55cbd1e4fdf&entry=gps&shh=CAE&lucs=,94297699,100795621,94231188,94280568,47071704,94218641,94282134,100813469,94286869,100820247,100804976&g_ep=CAISEjI2LjI1LjMuOTMyMTI1MTg3MBgAIIgnKmcsOTQyOTc2OTksMTAwNzk1NjIxLDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDEwMDgxMzQ2OSw5NDI4Njg2OSwxMDA4MjAyNDcsMTAwODA0OTc2QgJBTQ%3D%3D&skid=14cc7116-09a4-4a6d-b43e-34f660900b22&g_st=ic" target="_blank" className="medLink w-68.5 mt-3.5 p-1 text-center font-noto-armenian font-normal leading-[136%] text-[18px] border rounded-md border-[#3D521E] text-[#3D521E] hover:bg-[#3D521E] hover:text-white transition-colors duration-300">
                    Քարտեզ
                </Link>
            </div>


            <div className="w-full  flex relative flex-col justify-center items-center pt-0 sm:pt-12">
                <motion.div className="medMapTrchun  w-[130px] h-[110px] absolute  -bottom-2 -right-5"
                    animate={{
                        y: [0, -8, 0],
                        x: [0, -6, 0],
                        rotate: [4, -2, 4],
                    }}
                    transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}>
                    <Image src="/mapTrchun.svg" alt="" fill />
                </motion.div>
                <div className="medMapImg2 w-[530px] h-[308px] relative">
                    <Image src="/nameImg.png" alt="" fill className="object-contain" />
                </div>
                <div className="text-center">
                    <p className="medMapImgText text-[#3D521E] font-bold font-noto-armenian text-[18px] leading-[136%] ">Հարսանյանց հանդիսություն 17:00</p>
                    <p className="medMapImgText text-[#3D521E] font-normal font-noto-armenian text-[18px] leading-[136%]">ՖԼՈՐԵՆՍ ռեստորան</p>
                </div>
                <Link href="https://www.google.com/maps/place/%D0%A4%D0%BB%D0%BE%D1%80%D0%B5%D0%BD%D1%81/@40.1944274,44.4817236,971m/data=!3m2!1e3!4b1!4m6!3m5!1s0x406abd73b0648ca1:0x9a95769bab65b2e!8m2!3d40.1944274!4d44.4817236!16s%2Fg%2F11xqpy1r5!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D" className="medLink w-68.5 mt-3.5 p-1 text-center font-noto-armenian font-normal leading-[136%] text-[18px] border rounded-md border-[#3D521E] text-[#3D521E] hover:bg-[#3D521E] hover:text-white transition-colors duration-300">
                    Քարտեզ
                </Link>
            </div>

        </>
    )
}


