"use client"

import Countdown from "react-countdown";

const endingDate = new Date("2026-10-31");

export default function CountDown() {
    return (
        <Countdown
            date={endingDate}
            renderer={({ days, hours, minutes, seconds }) => (
                <div className="mt-10 flex justify-center gap-9">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="medTime font-inter leading-18 text-[70px] font-thin text-white">
                            {String(days).padStart(2, "0")}
                        </span>
                        <span className="medTimeSm font-noto-armenian uppercase font-light text-[12px] leading-4 tracking-[2.4px] text-white/70 ">Օր</span>
                    </div>

                    

                    <div className="flex flex-col gap-1 items-center">
                        <span className="medTime font-inter leading-18 text-[70px] font-thin text-white">
                            {String(hours).padStart(2, "0")}
                        </span>
                        <span className="medTimeSm font-noto-armenian uppercase font-light text-[12px] leading-4 tracking-[2.4px] text-white/70"> ԺԱՄ </span>
                    </div>

                    

                    <div className="flex flex-col gap-1 items-center">
                        <span className="medTime font-inter leading-18 text-[70px] font-thin text-white">
                            {String(minutes).padStart(2, "0")}
                        </span>
                        <span className="medTimeSm font-noto-armenian uppercase font-light text-[12px] leading-4 tracking-[2.4px] text-white/70">րոպե</span>
                    </div>

                    

                    <div className="flex flex-col gap-1 items-center">
                        <span className="medTime font-inter leading-18 text-[70px] font-thin text-white">
                            {String(seconds).padStart(2, "0")}
                        </span>
                        <span className="medTimeSm font-noto-armenian uppercase font-light text-[12px] leading-4 tracking-[2.4px] text-white/70">վայրկյան</span>
                    </div>
                </div>
            )}
        />
    );
}