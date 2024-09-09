import aboutImg from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants_copy/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-8 text-center text-2xl sm:text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <motion.div
        whileHover={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-center"
      >
        {/* Image Section */}
        <div className="w-full p-4 lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-full max-w-xs sm:max-w-md h-auto"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full p-4 lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-start px-4 lg:px-8">
            <p className="my-2 max-w-xl py-4 text-center lg:text-left text-base sm:text-lg">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
