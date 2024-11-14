import { IoCallSharp } from "react-icons/io5";
import Advantages from "../compotents/Adv/Advantages";
import Team from "../compotents/Team/Team";
import Modal from "../compotents/Modal/Modal";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/images/photo_2024-11-07_22-06-22.jpg";
import AnotherSpin from "../compotents/AnotherSpin/AnotherSpin";
import BeforeAfter from "../compotents/BeforeAfter/BeforeAfter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Ваш надёжный партнёр на высоте",
    "Профессиональные альпинисты для вашего бизнеса",
    "Решения для сложных задач на высоте",
    "Работаем на высоте, чтобы вы были спокойны внизу",
    "Мы знаем, как работать на высоте",
    "Сложные высотные работы? Мы решим эту проблему!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 4000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [texts.length]);

  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const offsetY = window.scrollY;
    setShowArrow(offsetY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="scroll-smooth"
    >
      {/* Кнопка для звонка */}
      <a
        className="fixed hidden  top-2/4 left-3 btn btn-circle text-2xl btn-primary"
        href="tel:+1111111"
      >
        <IoCallSharp />
      </a>

      {/* Кнопка наверх с использованием react-scroll */}
      {showArrow && (
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="fixed hidden lg:flex top-2/3 left-3 btn btn-circle text-2xl btn-primary"
        >
          <FaArrowUp />
        </Link>
      )}

      <motion.div
        className="hero min-h-screen  font-custom shadow-2xl shadow-gray"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="hero" className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1
              className="mb-5 text-5xl font-bold font-custom"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              BossAnAlp
            </motion.h1>
            <motion.p
              className="mb-5 font-custom font-bold text-xl  lg:min-w-96 min-h-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              {texts[currentText]}
            </motion.p>
            <NavLink
              className="btn font-semibold text-xl btn-primary"
              to="/order"
            >
              Заказать!
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="max-w-screen-xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <Advantages />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <Modal />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <Team />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <BeforeAfter />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <AnotherSpin />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
