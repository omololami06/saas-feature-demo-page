import React from "react";
import task2 from "/task2.jpg";
import wavy from "../assets/wavy.mp4";
import fallback from "../assets/fallback.png";
import { FeatureCard } from "../Feature/FeatureCard";
import { features } from "../Feature/FeatureData";
import { motion } from "framer-motion";

const SaasFeature = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden pt-10 bg-cover bg-center z-10"
      style={{ backgroundImage: `url(${fallback})` }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={fallback}
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src={wavy} type="video/mp4" />
      </video>

      {/* page content */}
      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-6">
        {/* Hero section */}
        <div className="flex flex-col items-center md:flex-row gap-6 w-full max-w-7xl relative bg-gradient-to-r from-gray-100 to-white rounded-xl shadow-md">
          <div className="p-6 md:p-10 flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold mb-4 leading-tight"
            >
              Stay Organized. <br />
              Stress Less.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base md:text-lg mb-6 pr-2 md:pr-0"
            >
              TaskFlow helps you manage tasks smoothly and boost productivity
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 hover:bg-sky-500 rounded-lg font-bold text-white shadow-lg"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end w-full md:w-1/2 pr-5"
          >
            <img
              className="w-full max-w-lg md:max-w-md lg:max-w-lg rounded-lg object-contain"
              src={task2}
              alt="An African man in the office, deciding next task"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="w-full max-w-7xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-10 mt-5 text-center md:text-left">
            Features
          </h2>
          <div
            className="grid grid-cols-1 
          md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-full"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* task-flow */}
        <div className="w-full max-w-7xl mx-auto px-10 py-10 text-center">
          <h2 className="text-xl font-bold mb-3">Why TaskFlow?</h2>
          <p className="text-lg">
            Taskflow stands out with features designed to make task management
            effortless and increase productivity.
          </p>
        </div>

        {/* CTA */}
        <div className="w-full max-w-7xl mx-auto px-6 py-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl mb-4 font-bold"
          >
            Get started with TaskFlow Today
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-600 hover:bg-sky-500 rounded-lg font-bold text-white shadow-lg mb-6"
            aria-label="Start free trial"
          >
            Start Free Trial
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-700 italic max-w-xl mx-auto mb-5"
          >
            “TaskFlow completely changed how our team organizes tasks. We are
            now more productive and less stressed!” <br /> Happy User
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SaasFeature;
