import React from "react";
import { motion } from "framer-motion";

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col h-full">
      <motion.div
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-3 flex flex-col cursor-pointer"
      >
        <div className="flex gap-2 mb-4 items-start">
          <Icon className="w-7 h-7 text-blue-600 shrink-0" aria-label={title} />
          <h3 className="text-xl font-bold leading-snug break-words">
            {title}
          </h3>
        </div>
        <p className="text-base md:text-lg mb-6 max-w-lg pr-2 flex-grow">
          {description}
        </p>
      </motion.div>

      <button
        className="mt-auto px-6 py-3 bg-blue-600 hover:bg-sky-500 rounded-lg font-bold text-white shadow-md text-base md:text-lg"
        aria-label="Try now"
      >
        Try Now
      </button>
    </div>
  );
};

export default FeatureCard;
