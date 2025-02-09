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
import BeforeAfterMob from "../compotents/BeforeAfter/BeforeAfterMob";
import TeamMob from "../compotents/Team/TeamMob";
import AnotherSpinMob from "../compotents/AnotherSpin/AnotherSpinMob";
import BeforeAfterStatic from "../compotents/BeforeAfter/BeforeAfterStatic";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/i.test(userAgent));
  }, []);

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
      <a
        className="fixed hidden top-2/4 left-3 btn btn-circle text-2xl btn-primary"
        href="tel:+1111111"
      >
        <IoCallSharp />
      </a>

      {showArrow && (
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="fixed hidden lg:flex bottom-12 right-3 btn btn-circle text-2xl btn-primary"
        >
          <FaArrowUp />
        </Link>
      )}

      <motion.div
        className="hero min-h-screen font-custom shadow-2xl shadow-gray"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="hero" className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1
              className="mb-5 text-5xl 2xl:text-7xl font-bold font-custom"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              BossAnAlp
            </motion.h1>
            <motion.p
              className="mb-5 font-custom font-bold text-xl lg:min-w-96 min-h-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              {texts[currentText]}
            </motion.p>
            <NavLink
              className="btn 2xl:text-3xl btn-primary"
              to="/our-services"
            >
              Заказать услуги
            </NavLink>
          </div>
        </div>
      </motion.div>

      <div className="max-w-screen-xl mx-auto">
        <Modal />

        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <div className="hidden lg:block">
            <AnotherSpin />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <div className="block lg:hidden">
            <AnotherSpinMob />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <div className="hidden lg:block">
            <BeforeAfter />
          </div>
          <div className="block lg:hidden">
            {isIOS ? <BeforeAfterStatic /> : <BeforeAfterMob />}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <Advantages />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <div className="hidden lg:block">
            <Team />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <div className="block lg:hidden">
            <TeamMob />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
