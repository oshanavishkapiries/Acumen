"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.section
      className="w-full py-12"
      aria-label="About Us Section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is in view
    >
      <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          className="flex flex-col items-start space-y-4"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
            variants={itemVariants}
          >
            About Us
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            Discover Our Story
          </motion.h2>
          <motion.p
            className="w-full text-muted-foreground md:text-xl lg:text-lg"
            variants={itemVariants}
          >
            We are a team of passionate individuals dedicated to creating
            innovative solutions that empower our clients to achieve their
            goals. With years of experience and a commitment to excellence, we
            strive to deliver exceptional results.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="max-md:w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Learn more about us"
              prefetch={false}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center" variants={itemVariants}>
          <Image
            src="/ACUMEN-banner.png"
            width={400}
            height={150}
            alt="Acumen banner"
            className="rounded-lg object-contain"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
