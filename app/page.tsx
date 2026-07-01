"use client";


import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import LogoNavbar from "@/components/logoNavbar";
import MainText from "@/components/mainText";
import Timeline from "@/components/timeLine";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = async () => {
    setPlayVideo(true);

    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setAudioPlaying(true);
    } catch (err) {
      console.log("Audio blocked:", err);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  return (
    <>

      <audio ref={audioRef} loop>
        <source src="/The-World-We-Knew.mp3" type="audio/mpeg" />
      </audio>

      <div
        className="w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/firstBgc.jpg')" }}
      >

        {!introDone && (
          <div
            className="medIntroNk fixed inset-0 max-w-3xl mx-auto flex justify-center items-center bg-cover  bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/intro.png')" }}
          >
            {!playVideo && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[88px] h-[98px] relative cursor-pointer"
                onClick={handleStart}
              >
                <Image src="/clickIntro.svg" alt="introClick" fill />
              </motion.div>
            )}

            {playVideo && (
              <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIntroDone(true)}
              >
                <source src="/IMG_1676.MP4" type="video/mp4" />
              </video>
            )}
          </div>
        )}


        {introDone && (
          <div className="max-w-3xl mx-auto px-2 relative ">


            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 rounded-full bg-[#6B7155] flex justify-center items-center fixed top-4 right-4 lg:right-[20%] xl:right-[25%] 2xl:right-[32%] z-50"
              onClick={toggleAudio}
            >
              <Image
                src={audioPlaying ? "/play.svg" : "/pause.svg"}
                alt="audio"
                width={22}
                height={22}
                className="object-contain hover:scale-110 transition-transform cursor-pointer"
              />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LogoNavbar />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MainText />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full mt-8 h-90 relative"
            >
              <Image src="/nameImg.png" alt="" fill className="object-contain sm:object-cover" />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="medTalk w-full h-286 relative pt-22 flex justify-center"
            >

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="medTalkWd w-md h-80.5 rounded-[18px] bg-cover bg-center bg-no-repeat absolute z-20"
                style={{ backgroundImage: "url('/sirelii-background.jpg')" }}
              >
                <div className="w-full flex flex-col gap-4 justify-center items-center h-full">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="medTalkText font-kotayk text-[28px] text-[#5B6142]"
                  >
                    Սիրելի' հյուրեր,
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="medTalkTextP font-noto-armenian text-[#5B6142] text-center w-80"
                  >
                    Ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը։ Մեծ Ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանյաց արարողությանը։
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="medTalkText font-signature tracking-[1px] text-[#5B6142] text-[28px]"
                  >
                    31.10.2026
                  </motion.p>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="medTalkBgc w-full h-220 sm:h-full absolute  top-0 left-0 bg-cover  sm:bg-bottom  bg-top bg-no-repeat z-30"
                style={{ backgroundImage: "url('/mainTextImg.png')" }}
              />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
              className="w-full h-61.5 flex justify-center relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-10, -5, -10],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[156px] h-[132px] medTrchun3 absolute -bottom-18 left-10"
              >
                <Image
                  src="/trchun1.svg"
                  alt=""
                  fill
                />
              </motion.div>


              <div className="medFlow  absolute -bottom-102 -right-45">
                <Image
                  src="/pinkFlow.png"
                  alt=""
                  width={434}
                  height={658}
                />
              </div>

              <div className="medPar w-77  h-full relative" >
                <Image
                  src="/parImg.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>


            <div className="w-full h-225 mt-8 relative">
              <div className="w-full flex justify-center">
                <p className="medDaysText font-norkirk text-[60px] leading-12 font-normal text-[#5B6142]">
                  Oրակարգ
                </p>
              </div>
              <Timeline />





            </div>
            <div className="w-full h-240">

            </div>
          </div>
        )}
      </div>
    </>
  );
}


