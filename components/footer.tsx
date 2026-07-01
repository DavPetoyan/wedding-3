import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    return (
        <>
            <motion.div className="w-full mt-18 flex justify-center ">
                <div className="w-md h-[332px] flex justify-center items-center bg-white rounded-[14px]" >
                    <div className="w-[384px] h-[265px] bg-contain relative bg-center bg-no-repeat flex items-center flex-col justify-center  p-6 text-white " style={{
                        backgroundImage:
                            "url('/footerBgc.jpg')",
                    }}>
                        <p className='font-vrdznagir text-[#DEDAD5] text-[20px] leading-1.7 '>Կայքը պատրաստել է </p>
                        <div>
                            <p className='font-noto-armenian text-[6px] text-[#A1A1AA]/64 '>սեղմիր այստեղ</p>
                        </div>

                        <Link href="https://www.ayanagency.com" target="_blank">
                            <Image src="Ayan-agency.svg" alt='' width={84} height={48} className='object-contain' />
                        </Link>

                        <div className='w-full flex justify-center items-center'>
                            <Link href="https://www.instagram.com/ayan_agency_?igsh=MTJiNDhnNHV2d3RnOQ==" target="_blank">
                                <Image src="/mynaui_instagram.png" alt='instagram' width={24} height={24} className='object-contain' />
                            </Link>
                            <Link href="https://www.facebook.com/share/1Dasc5J8eN/?mibextid=wwXIfr" target="_blank">
                                <Image
                                    src="/fb.svg"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                    className='object-contain'
                                />
                            </Link>
                        </div>
                        <div className=' w-[1034px] h-[418px] absolute -bottom-55  '>
                            <Image src="/flowerFooter.svg" alt="" fill />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
