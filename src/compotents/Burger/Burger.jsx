import { IoMdClose } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Burger = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        className="text-2xl absolute right-3 top-3"
        onClick={handleBackClick}
      >
        <IoMdClose />
      </button>

      <motion.div
        className="flex flex-col justify-center items-center mt-52 text-2xl font-custom gap-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink className="btn-link" to="/">
            Главная
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NavLink className="btn-link" to="/our-services">
            Услуги
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="tel:+111" className="btn btn-primary">
            <MdOutlineLocalPhone className="text-xl" /> Позвонить нам
          </a>
        </motion.div>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink className="btn btn-primary" to="/order">
            Заказать наши услуги
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Burger;
