"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const techStackData = [
  { Icon: "/tech-icon/angular.svg", label: "Angular" },
  { Icon: "/tech-icon/gitlab.svg", label: "GitLab" },
  { Icon: "/tech-icon/java.svg", label: "Java" },
  { Icon: "/tech-icon/javascript.svg", label: "JavaScript" },
  { Icon: "/tech-icon/nodejs.svg", label: "Node Js" },
  { Icon: "/tech-icon/npm.svg", label: "Npm" },
  { Icon: "/tech-icon/postgresql.svg", label: "PostgreSQL" },
  { Icon: "/tech-icon/typescript.svg", label: "TypeScript" },
  { Icon: "/tech-icon/springboot.png", label: "Spring Boot" },
  { Icon: "/tech-icon/react.png", label: "React" },
  { Icon: "/tech-icon/nextjs.png", label: "Next Js" },
  { Icon: "/tech-icon/aws.png", label: "AWS" },
];


const TechItem = ({ Icon, label }: { Icon: string; label: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image src={Icon} alt={label} width={50} height={50} />
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
};

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="h3">
              Tech Stack
            </h2>
            <p className="max-w-[700px] text-1">
              The technologies we use to build amazing products.
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStackData.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TechItem Icon={tech.Icon} label={tech.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
