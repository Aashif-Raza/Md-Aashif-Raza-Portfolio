"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <section
            id="about"
            className="w-full bg-white dark:bg-[#111111] py-20 md:py-32 overflow-hidden flex items-center justify-center relative z-10"
            ref={ref}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full relative z-20">

                {/* Left Column: Black & White Photo */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                    initial={{ opacity: 0, filter: "blur(10px)", x: -50 }}
                    animate={isInView ? { opacity: 1, filter: "blur(0px)", x: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="relative w-64 h-64 md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-black/10 dark:border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src="/assets/about-me.png"
                            alt="Md Aashif Raza"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Column: Text and Button */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={textVariants}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight"
                    >
                        About Me
                    </motion.h2>

                    <motion.h3
                        variants={textVariants}
                        className="text-xl md:text-2xl font-semibold mb-6 flex flex-wrap justify-center md:justify-start gap-2"
                    >
                        <span className="text-gray-900 dark:text-white">Full Stack Developer</span>
                        <span className="text-brand">& Designer</span>
                    </motion.h3>

                    <motion.p
                        variants={textVariants}
                        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-lg font-light"
                    >
                        I&apos;m a Full Stack Developer experienced in the MERN stack —
                        React.js, Node.js, Express.js, and MongoDB. I build clean,
                        responsive UIs with Tailwind CSS and bring them to life with
                        Framer Motion and GSAP animations. Passionate about pixel-perfect
                        design, performance, and scalable code. B.E. Computer Science,
                        RR Institute of Technology (CGPA: 8.06). NASSCOM Certified
                        Application Developer.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        variants={textVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px var(--brand)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand text-white px-8 py-4 rounded-full font-medium transition-colors hover:bg-brand/80 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#111111] inline-block"
                    >
                        Let&apos;s Talk
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
