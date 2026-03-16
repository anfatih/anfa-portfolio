"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Floating Profile Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Image
            src="/profile.jpg"
            width={160}
            height={160}
            alt="profile"
            className="rounded-full mx-auto shadow-2xl"
          />
        </motion.div>

        {/* Typing Animation */}
        <h1 className="text-4xl font-bold mt-6 font-mono">
          <TypeAnimation
            sequence={["Hi, I'm Annas Fatihur Rahman", 2000]}
            wrapper="span"
            speed={50}
            repeat={0}
          />
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg font-medium tracking-wide text-gray-600 font-mono">
          UI/UX Designer & Information Systems Student
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/annas-fatihur-03a13b3b7"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/anfatih"
            target="_blank"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:annsfthr@gmail.com"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}