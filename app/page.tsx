"use client";


import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LogoNavbar from "@/components/logoNavbar";
import MainText from "@/components/mainText";
import Timeline from "@/components/timeLine";
import Map from "@/components/map";
import Link from "next/link";
import CountDown from "@/components/countDown";
import Hastatel from "@/components/hastatel";
import Footer from "@/components/footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);


  // useEffect(() => {
  //   alert(window.innerWidth + " × " + window.innerHeight);
  // }, []);

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
          <>
            <div className="max-w-3xl mx-auto px-2 relative ">


              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-11 h-11 rounded-full bg-[#6B7155] flex justify-center items-center fixed top-4 right-4 lg:right-[20%] xl:right-[25%] 2xl:right-[32%] z-190"
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
                className="medNameImg w-full mt-8 h-70 relative"
              >
                <Image src="/nameImg.png" alt="" fill className="object-contain sm:object-cover" />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="medTalk w-full h-120 sm:h-220 relative pt-22 flex justify-center"
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
                  className="medTalkBgc w-full h-140 sm:h-220  absolute sm:bg-cover top-0 left-0 bg-contain  sm:bg-bottom  bg-top bg-no-repeat z-30"
                  style={{ backgroundImage: "url('/mainTexttImg.svg')" }}
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
                  className="w-[156px] h-[132px] medTrchun3 absolute z-50 -bottom-18 left-10"
                >
                  <Image
                    src="/trchun1.svg"
                    alt=""
                    fill
                  />
                </motion.div>


                <div className="medFlow  absolute -bottom-102 z-50 -right-45">
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


            </div>


            <div
              className="relative w-full rotate-180 mt-8  bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/secondBgc.jpg')" }}
            >
              <div className="absolute  inset-0 bg-[#F5F5F5]/90"></div>
              <div className="relative z-10 rotate-180 max-w-3xl mx-auto">
                <div className="flex justify-center pt-10">
                  <p className="medDaysText font-norkirk text-[60px] leading-12 text-[#5B6142]">
                    Օրակարգ
                  </p>
                </div>

                <Timeline />
                <div className="medManLine w-[418px] h-[298px] absolute top-150 -left-40 ">
                  <Image src="/manLineImg.svg" alt="" fill />
                  <div className="w-[314px] h-[224px] relative -top-10 left-20 ">
                    <Image src="/manLineImg2.svg" alt="" fill />
                  </div>
                </div>

                <div className="w-full h-full">
                  <motion.div className="flex justify-center pt-12">
                    <img
                      src="/bus.png"
                      alt=""
                      className="medBusImg w-[224px] h-[352px]"
                    />
                  </motion.div>

                  <motion.div className="medFlow absolute -right-50 top-[822px] w-[448px] h-[682px] rotate-[340deg]">
                    <Image src="/pinkFlow.png" alt="" fill />
                  </motion.div>
                  <div className="flex justify-center pt-14">
                    <p className="medMapText font-norkirk text-[60px] leading-12 text-[#5B6142]">
                      Հասցեներ
                    </p>
                  </div>
                  <Map />
                  <div className="w-full h-full flex justify-center items-center gap-4 flex-col mt-12">
                    <p className="medQrText font-noto-armenian text-[#3D521E] font-normal text-[20px] leading-5 tracking-[0.35px] ">Սքանավորեք՝ օրվա լուսանկարները ավելացնելու համար</p>
                    <div className="medQR  w-full h-[481px] relative">
                      <Image src="/qrCode.png" alt="" fill className="object-contain" />
                    </div>
                    <Link href="https://t.me/+_kXaV5tF4iFiM2Yy" target="_blank" className="medLink w-68.5 mt-3.5 p-1 text-center font-noto-armenian font-normal leading-[136%] text-[18px] border rounded-md border-[#3D521E] text-[#3D521E] hover:bg-[#3D521E] hover:text-white transition-colors duration-300">
                      Telegram  հղում
                    </Link>
                  </div>

                  <div className="medCount w-full relative flex-col flex gap-6 h-86 mt-6 bg-[#7C8264] px-12 pb-32 pt-15.5 ">
                    <div className="medCountFlow w-[314px] h-[418px] rotate-48 absolute  bottom-10 -left-64">
                      <Image src="/pinkFlow.png" alt="" fill />
                    </div>
                    <div className="medCountManFlow w-[336px] h-[240px] absolute  bottom-10 -right-50">
                      <Image src="/manFlow.svg" alt="" fill />
                    </div>
                    <motion.div className="medCountTrchun1 w-[254px] h-[174px] absolute  -bottom-12 -left-20"
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 6, 0],
                        rotate: [-8, -3, -8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      <Image src="/countTrchun.svg" alt="" fill />
                    </motion.div>

                    <motion.div className="medCountTrchun2 w-[254px] h-[174px]  -rotate-40 sm:rotate-0 absolute  -top-38 -right-20"
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
                      <Image src="/countTrchun2.svg" alt="" fill />
                    </motion.div>
                    <div className="medTr1P w-full relative flex justify-center items-center font-adine text-[#E8DDC7] font-normal uppercase tracking-[3px] leading-5 text-[70px] ">
                      <p className="medTr1 absolute left-[282px] top-[0px]">K</p>
                      <p className="medTr2 absolute left-[322px] top-[12px] ">R</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center  mt-5">
                      <p className="medTimeP1 font-noto-armenian text-[#E8DDC7] text-[40px] leading-15">Հետհաշվարկը սկսվեց...</p>
                      <p className="medTimeP2 font-noto-armenian text-[#E8DDC7] text-[18px] leading-5 tracking-[1.4px]">Մեր կյանքի ամենաթանկ ու սպասված օրը</p>
                      <CountDown />
                    </div>
                  </div>
                </div>

              </div>
            </div>




            <div className="medFooterHgg w-full  h-240.5 ">
              <div className="max-w-3xl mx-auto px-2 h-full flex flex-col justify-center items-center gap-4">
                <div className="medFormRound w-full h-full flex  flex-col items-center relative rounded-[70px] py-4 bg-cover bg-no-repeat bg-center " style={{ backgroundImage: "url('/palma.svg')" }}>
                  <p className="medFormTextH font-norkirk text-[42px] text-center leading-12 text-[#5B6142] w-[576px] h-[48px] ">
                    Հաստատեք ձեր ներկայությունը
                  </p>
                  <Hastatel />
                  <div className="absolute -bottom-20">
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 ">

            </div>







          </>


        )}
      </div>
    </>
  );
}


