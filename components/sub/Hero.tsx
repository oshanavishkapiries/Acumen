"use client";
import Lottie from "react-lottie";
import animationData from "../../public/assets/hero-animation.json";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section
        className="w-full h-screen flex flex-col-reverse py-16 md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex flex-col justify-center items-start gap-3 p-4">
          <div className="w-full flex flex-row justify-center items-center gap-3">
            <h1 className="h1 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Get
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="h2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Smart
              </h1>
              <h1 className="h2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Fast
              </h1>
              <h1 className="h2 bg-gradient-to-r from-teal-400 to-lime-500 bg-clip-text text-transparent">
                Acumen.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <LottieAnimation />
        </div>
      </motion.section>

      <motion.section
        className="bg-muted max-md:rounded-none rounded-lg py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 1.0 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-1">
              Have a question or want to work together? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Hero;
