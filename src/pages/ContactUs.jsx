import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const listItemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const ContactUs = () => {
  return (
    <div className="font-custom flex justify-center mt-96 text-2xl font-semibold">
      <NavLink
        className="absolute top-2 left-2 flex items-center gap-2 btn"
        to="/"
      >
        <IoMdArrowBack /> назад
      </NavLink>
      <ul className="flex flex-col gap-5 items-center">
        <motion.li
          className="flex items-center"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <a href="tel:+79261380527">+7 (926) 138-05-27</a>
        </motion.li>

        <motion.li
          className="flex items-center"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <a href="tel:+79266530581">+7 (926) 653-05-81</a>
        </motion.li>

        <motion.li
          className="flex items-center"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <a
            className="flex gap-2 items-center btn btn-primary text-xl"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram /> Связаться через Telegram
          </a>
        </motion.li>

        <motion.li
          className="flex items-center"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <a
            className="flex gap-2 items-center btn btn-primary text-xl"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp /> Связаться через WhatsApp
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default ContactUs;
