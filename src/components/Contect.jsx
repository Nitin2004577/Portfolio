import { CONTACT } from "../constants_copy";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8 lg:px-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tight sm:tracking-normal">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-sm sm:text-base md:text-lg"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-sm sm:text-base md:text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-sm sm:text-base md:text-lg"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
