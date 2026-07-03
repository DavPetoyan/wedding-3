import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
export default function MainText() {
    return (
        <>
            <div className="flex flex-col items-center mt-6">
                <motion.p
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1.2 }}
                    className="medMainText font-bidena text-[130px] text-[#3D521E]"
                >
                    Karen
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="medMainText font-signature text-[130px] text-[#3D521E]/70"
                >
                    &
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="medMainText font-bidena text-[130px] text-[#3D521E]"
                >
                    Ruzanna
                </motion.p>
            </div>
        </>
    )
}
