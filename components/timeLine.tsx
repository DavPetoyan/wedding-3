"use client";

import { useEffect, useRef } from "react";
import {
    useMotionValueEvent,
    useScroll,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const birdRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 18,
        mass: 1,
    });

    useEffect(() => {
        if (!pathRef.current || !birdRef.current) return;

        const point = pathRef.current.getPointAtLength(0);

        birdRef.current.style.transform = `translate(${point.x - 70}px, ${point.y - 48
            }px)`;
    }, []);

    useMotionValueEvent(progress, "change", (value) => {
        if (!pathRef.current || !birdRef.current) return;

        const path = pathRef.current;
        const length = path.getTotalLength();

        const point = path.getPointAtLength(length * value);

        birdRef.current.style.transform = `translate(${point.x - 70}px, ${point.y - 48
            }px)`;
    });

    return (
        <>
            <div
                ref={containerRef}
                className="relative mx-auto mt-8  w-[193px] h-[812px]"
            >
                <svg
                    viewBox="0 0 193 812"
                    className="absolute inset-0 w-full h-full overflow-visible"
                >
                    <path
                        ref={pathRef}
                        d="M90.4985 0C90.4985 35.6857 94.0909 64.5389 105.968 74.2495C133.253 96.5588 135.641 126.627 115.535 147.873C77.9347 187.605 61.5307 224.65 87.633 257.862C130.994 296.445 123.672 334.897 90.8882 364.733C-15.6822 461.717 146.163 526.157 165.829 529.64C205.327 536.636 201.191 458.007 146.041 474.287C91.7928 490.302 -17.9891 521.191 3.82615 587.664C17.7176 629.993 85.4943 640.244 105.553 645.797C140.895 655.582 162.963 667.669 165.829 707.384C169.511 758.418 49.0754 773.514 11.4677 785.087C-10.9793 791.994 27.2279 811.563 71.1664 810.988"
                        fill="none"
                        stroke="#586035"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                    />
                </svg>

                <div
                    ref={birdRef}
                    className="absolute pointer-events-none will-change-transform"
                >
                    <div className="medTrchunSc w-[140px] h-[96px] relative ">
                        <Image
                            src="/trchun3.svg"
                            alt="bird"
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>

            


            <motion.div
                className="medEkexeci absolute top-24 left-28"
                initial={{ opacity: 0, x: -80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    className="medEkexeci2 w-32 h-53.5 relative"
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/ekexeci.svg" alt="" fill className="object-contain" />
                </motion.div>
                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    14:30
                </p>
                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    Պսակադրություն
                </p>
            </motion.div>

            <motion.div
                className="medPesa absolute flex flex-col justify-center items-end top-64 right-30"
                initial={{ opacity: 0, x: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <motion.div
                    className="medPesa2 w-41 h-41 relative"
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/harsPesa.svg" alt="" fill className="object-contain" />
                </motion.div>

                <div className="flex flex-col justify-center items-center">
                    <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                        14:30
                    </p>
                    <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                        Հարսանյաց հանդիսություն
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="medNamak absolute top-[358px] left-20"
                initial={{ opacity: 0, x: -80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <motion.div
                    className="medNamak2 w-54 h-45.5 relative"
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/namak.svg" alt="" fill className="object-contain" />
                </motion.div>

                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    17:00-17:30
                </p>
                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    Հյուրերի դիմավորում
                </p>
            </motion.div>

            <motion.div
                className="medBajak absolute top-[498px] right-20"
                initial={{ opacity: 0, x: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <motion.div
                    className="medBajak2 w-42.5 h-34.5 relative"
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/bajak.svg" alt="" fill className="object-contain" />
                </motion.div>

                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    18:00
                </p>
                <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                    Ընթրիք
                </p>
            </motion.div>

            <motion.div
                className="medTort absolute flex flex-col items-start top-[660px] left-22"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <motion.div
                    className="medTort2 w-40 h-48 relative"
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/tort.svg" alt="" fill className="object-cover object-top" />
                </motion.div>

                <div className="flex flex-col justify-center">
                    <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                        22:00
                    </p>
                    <p className="medNkarText font-norkirk text-[20px] font-normal leading-[136%] text-center text-[#3D521E]">
                        Տորթի արարողություն
                    </p>
                </div>
            </motion.div>




        </>
    );
}


