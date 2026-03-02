"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    // Animation variants based on user spec
    const photoVariants = {
        hidden: { opacity: 0, x: -80, filter: 'blur(12px)' },
        visible: {
            opacity: 1, x: 0, filter: 'blur(0px)',
            transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    }

    const labelVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.7, delay: 0.3 }
        }
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
        visible: (customDelay: number) => ({
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.8, delay: customDelay, ease: [0.25, 0.46, 0.45, 0.94] }
        })
    }

    const roleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.7, delay: 0.75 }
        }
    }

    const bioVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, delay: 0.9 }
        }
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
            opacity: 1, scale: 1,
            transition: { duration: 0.6, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }
        }
    }

    return (
        <section
            id="about"
            className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-[#12121f] dark:bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_#0d0d1a_100%)]"
            ref={ref}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 py-16 md:px-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Photo Column */}
                <motion.div
                    className="relative w-full h-[70vw] md:h-[80vh] min-h-[400px] md:min-h-[600px] flex items-end justify-center z-50 pointer-events-auto"
                    variants={photoVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {/* Photo itself */}
                    <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden z-[999]">
                        <img
                            src="/assets/about-me.png"
                            alt="Md Aashif Raza"
                            className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-[80%] block"
                        />
                        {/* Gradients to fade photo softly into background */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-[40%] z-10 pointer-events-none bg-gradient-to-t from-slate-100 dark:from-[#12121f] to-transparent"
                        ></div>
                        <div
                            className="absolute top-0 right-0 w-[30%] h-full z-10 pointer-events-none hidden md:block bg-gradient-to-r from-transparent to-slate-100 dark:to-[#12121f]"
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-[30%] h-full z-10 pointer-events-none hidden md:block bg-gradient-to-l from-transparent to-slate-100 dark:to-[#12121f]"
                        ></div>
                    </div>
                </motion.div>

                {/* Text Column */}
                <div className="flex flex-col justify-center text-left max-w-xl mx-auto md:mx-0 relative z-20">
                    <motion.div
                        className="flex items-center gap-3 mb-4"
                        variants={labelVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <span className="w-6 h-[2px] bg-[#F5C518]"></span>
                        <span className="text-[#F5C518] text-[12px] md:text-[14px] font-semibold tracking-[0.4em] uppercase">
                            About
                        </span>
                    </motion.div>

                    <h2 className="text-[clamp(32px,8vw,48px)] md:text-[clamp(42px,6vw,80px)] leading-[1.1] font-sans mb-2 flex flex-wrap gap-x-3">
                        <motion.span
                            className="font-light text-slate-800 dark:text-white"
                            custom={0.4}
                            variants={wordVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            I&apos;m
                        </motion.span>
                        <motion.span
                            className="font-extrabold text-slate-800 dark:text-white"
                            custom={0.52}
                            variants={wordVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            Aashif
                        </motion.span>
                        <motion.span
                            className="font-extrabold text-slate-800 dark:text-white"
                            custom={0.64}
                            variants={wordVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            Raza
                        </motion.span>
                    </h2>

                    <motion.p
                        className="text-slate-600 dark:text-[#a0a0b0] text-[18px] md:text-[22px] font-normal mb-6"
                        variants={roleVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        Full Stack Developer & Designer
                    </motion.p>

                    <motion.p
                        className="text-slate-500 dark:text-[#8888a0] text-[15px] md:text-[16px] leading-[1.9] max-w-[480px] mb-10"
                        variants={bioVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        I am a passionate Full Stack Developer who recently completed
                        my B.E. in Computer Science & Engineering. I love building
                        things for the web — clean UIs, smooth animations, and
                        scalable backends using the MERN stack. I am always learning,
                        always building, and hungry to grow every single day.
                        Currently looking for opportunities where I can contribute,
                        create, and make a real impact.
                    </motion.p>

                    <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="w-full md:w-fit"
                    >
                        <a
                            href="#contact"
                            className="inline-block w-full md:w-auto text-center bg-[#F5C518] text-[#0d0d1a] font-bold text-[15px] py-[14px] px-[36px] rounded-[50px] transition-all duration-300 ease-out hover:scale-[1.06] hover:bg-[#FFD700] hover:shadow-[0_8px_30px_rgba(245,197,24,0.5)] cursor-pointer"
                        >
                            Let&apos;s Talk
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
