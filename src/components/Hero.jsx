import { HERO_CONTENT } from "../constants_copy/index";
import profilePic from "../assets/images/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl font-thin tracking-tight text-center lg:text-left lg:mt-16 lg:text-8xl"
            >
              Nitin Kumar Shah
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent tracking-tight text-center lg:text-left lg:text-4xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x: 100, opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{duration: 1, delay:1.2}}
              src={profilePic}
              alt="Nitin Kumar Shah"
              className="w-1/2 lg:w-full max-w-full h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
