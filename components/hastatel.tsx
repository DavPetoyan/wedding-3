'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const f = {
    fullName: "Անուն Ազգանուն",
    attendance: "Կկարողանա՞ք ներկա գտնվել  ",
    yes: "Այո,ներկա  կլինեմ",
    no: "Ոչ, ներկա չեմ լինի",
    invitedBy: "Ու՞մ կողմից եք հրավիրված",
    groom: "Փեսայի կողմից",
    bride: "Հարսի կողմից",
    guestCount: "Հյուրերի քանակը",
    submit: "ուղարկել",
};

export default function Hastatel() {
    return (
        <motion.form
            action="https://formsubmit.co/ruzik.poghosyan@mail.ru"
            method="POST"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" px-4 mt-8"
        >
            <div className="medForm mx-auto  flex w-[576px] h-[598px] flex-col items-center justify-center gap-6 rounded-2xl border border-white/20 bg-white/60 p-6 ">

                <div className="medFormWd w-full max-w-[420px]">
                    <p className="medFormText mb-1 text-[14px] text-[#5B6142]">
                        {f.fullName}
                    </p>

                    <input
                        type="text"
                        name="Անուն Ազգանուն"
                        required
                        className="medFormHg h-10 w-full rounded-xl border border-[#7C826433] bg-white/[0.12] px-3 text-[#5B6142] placeholder-[#5B614255] transition duration-300 focus:scale-[1.01] focus:border-transparent focus:outline focus:outline-[#5B6142]"
                    />
                </div>

            
                <div className="medFormWd w-full max-w-[420px]">
                    <p className="medFormText mb-2 text-[14px] text-[#5B6142]">
                        {f.attendance}
                    </p>

                    <div className="flex items-center justify-center gap-[30px]">

                        <input
                            id="yes"
                            type="radio"
                            name="Ներկա"
                            value="Այո"
                            required
                            className="rad hidden"
                        />

                        <label
                            htmlFor="yes"
                            className="medFormText flex h-[46px] text-[14px] w-full max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#7C826433] bg-white/[0.12] text-[#5B6142] transition duration-300 hover:scale-[1.03]"
                        >
                            {f.yes}
                        </label>

                        <input
                            id="no"
                            type="radio"
                            name="Ներկա"
                            value="Ոչ"
                            className="rad hidden"
                        />

                        <label
                            htmlFor="no"
                            className="medFormText flex h-[46px] text-[14px] w-full max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#7C826433] bg-white/[0.12] text-[#5B6142] transition duration-300 hover:scale-[1.03]"
                        >
                            {f.no}
                        </label>

                    </div>
                </div>

                <div className="medFormWd w-full max-w-[420px]">
                    <p className="medFormText mb-2 text-[14px] text-[#5B6142]">
                        {f.invitedBy}
                    </p>

                    <div className="flex items-center justify-center gap-[30px]">

                        <input
                            id="pesa"
                            type="radio"
                            name="Ում կողմից"
                            value="Կարեն"
                            required
                            className="rad hidden"
                        />

                        <label
                            htmlFor="pesa"
                            className="medFormText flex h-[46px] w-full text-[14px] max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#7C826433] bg-white/[0.12] text-[#5B6142] transition duration-300 hover:scale-[1.03]"
                        >
                            {f.groom}
                        </label>

                        <input
                            id="hars"
                            type="radio"
                            name="Ում կողմից"
                            value="Ռուզաննա"
                            className="rad hidden"
                        />

                        <label
                            htmlFor="hars"
                            className="medFormText flex h-[46px] w-full text-[14px] max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#7C826433] bg-white/[0.12] text-[#5B6142] transition duration-300 hover:scale-[1.03]"
                        >
                            {f.bride}
                        </label>

                    </div>
                </div>
            
                <div className="medFormWd w-full max-w-[420px]">
                    <p className="medFormText mb-1 text-[14px] text-[#5B6142]">
                        {f.guestCount}
                    </p>

                    <input
                        type="number"
                        name="Հյուրերի քանակ"
                        required
                        className="medFormHg h-10 w-full rounded-xl border border-[#7C826433] bg-white/[0.12] px-3 text-[#5B6142] transition duration-300 focus:scale-[1.01] focus:border-transparent focus:outline focus:outline-[#5B6142]"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="medFormWd font-noto-armenian font-medium tracking-[0.160px] py-2 w-full flex justify-center items-center gap-1 max-w-[420px] cursor-pointer rounded-xl bg-[#5B6142]/90 text-white shadow-md transition"
                >
                    <Image
                        src="/tg.svg"
                        alt=""
                        width={16}
                        height={16}
                    />
                    {f.submit}
                </motion.button>

                <input
                    type="hidden"
                    name="_subject"
                    value="New RSVP Response"
                />

                <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                />

            </div>
        </motion.form>
    );
}
