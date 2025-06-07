import { HERO_CONTENT } from "../constants_copy/index";
import profilePic from "../assets/images/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-8 lg:mb-36 pt-8">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold tracking-tight text-center lg:text-left lg:text-7xl text-white"
            >
              Nitin Kumar Shah
            </motion.h1>

            <motion.h2
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-2 text-2xl font-medium tracking-tight text-center lg:text-left lg:text-3xl text-purple-400"
            >
              React & Django Developer
            </motion.h2>

            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="mt-6 text-center text-neutral-400 max-w-xl lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Nitin Kumar Shah"
              className="rounded-full border-4 border-purple-500 shadow-lg w-48 h-48 lg:w-72 lg:h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
