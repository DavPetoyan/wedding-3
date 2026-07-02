import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function LogoNavbar() {
    return (
        <>
            <motion.div
                // initial={{ opacity: 0, y: -40 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center"
            >
                <div className="medLogo relative w-98 h-107">
                    <Image src="/logo.png" alt="" fill className="object-contain" />

                    
                    <motion.div
                        
                        className=" w-[156px] h-[132px] medTrchun1 absolute top-54 -left-40"
                    >
                        <Image
                            src="/trchun1.svg"
                            alt=""
                            fill
                        />
                    </motion.div>

                    
                    <motion.div
                        
                        className="w-[204px] h-[173px] medTrchun2 absolute -bottom-20 -right-40"
                    >
                        <Image
                            src="/trchun2.svg"
                            alt=""
                            fill
                        />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
