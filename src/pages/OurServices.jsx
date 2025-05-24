import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// Десктоп-изображения
import chastnaya from "../assets/images/services/vova12.jpg";
import fasad from "../assets/images/services/timoteyDesk.jpg";
import mha from "../assets/images/services/mha.jpg";
import sneg from "../assets/images/services/sneg.jpg";
import sosulki from "../assets/images/services/sosulkiDesk.jpg";
import ukrashenia from "../assets/images/services/ukrashenie.jpg";
import vodostok from "../assets/images/services/vodostok.jpg";
import prom from "../assets/images/services/promDesk.jpg";

// Заглушка для моб. изображений
import placeholder from "../assets/images/services/prom.jpg";
import chastnayaMob from "../assets/images/services/vovaMob.jpg";
import snegMob from "../assets/images/services/pacaniMob.jpg";
import vodostokMob from "../assets/images/services/trubaMob.jpg";
import sosulkiMob from "../assets/images/services/sosulkiMob.jpg";
import fasadMob from "../assets/images/services/timoteyMob.jpg";
import promMob from "../assets/images/services/promMob.jpg";
// Хук для определения ширины экрана
const useScreenType = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1536);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1536);
    };

    handleResize(); // на случай SSR
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const OurServices = () => {
  const isMobile = useScreenType();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      desk: prom,
      mob: promMob,
      title: "Промышленная мойка окон",
      description:
        "Включает комплексные услуги по очистке окон промышленных зданий с использованием специализированного оборудования и эффективных методов для достижения высокого качества результата.",
      price: "от 20 руб/м²",
    },
    {
      desk: fasad,
      mob: fasadMob,
      title: "Частная мойка окон",
      description:
        "Предусматривает услуги по профессиональной очистке окон в жилых домах, квартирах и на дачах с учетом особенностей каждого объекта для обеспечения чистоты и комфорта.",
      price: "цена договорная",
    },
    {
      desk: chastnaya,
      mob: chastnayaMob,
      title: "Мойка фасада",
      description:
        "Осуществляется тщательная очистка наружных стен зданий от различных видов загрязнений с применением современных технологий для поддержания презентабельного внешнего вида.",
      price: "от 20 руб/м²",
    },
    {
      desk: ukrashenia,
      mob: ukrashenia,
      title: "Украшение коттеджей",
      description:
        "Предлагаются услуги по оформлению и декорированию внешнего вида частного дома, что придает индивидуальность и эстетическую привлекательность зданию.",
      price: "цена договорная",
    },
    {
      desk: mha,
      mob: mha,
      title: "Очистка кровли от мха",
      description:
        "Включает удаление мха, лишайников и других растений с крыши, что помогает предотвратить их разрушительное воздействие на материалы покрытия.",
      price: "50 руб/м²",
    },
    {
      desk: sneg,
      mob: snegMob,
      title: "Очистка кровли от снега и наледи",
      description:
        "Предусматривает комплексные услуги по безопасному удалению снежных и ледяных отложений с крыши для предотвращения повреждений и протечек.",
      price: "от 25 руб/м²",
    },
    {
      desk: vodostok,
      mob: vodostokMob,
      title: "Подготовка водостоков к зиме",
      description:
        "Включает очистку и профилактическую обработку водостоков для предотвращения замерзания воды и образования ледяных пробок в зимний период.",
      price: "от 350 руб/шт",
    },
    {
      desk: sosulki,
      mob: sosulkiMob,
      title: "Удаление сосулек",
      description:
        "Предлагаются услуги по эффективному удалению наледи и сосулек с крыш и водостоков для обеспечения безопасности и предотвращения возможных повреждений.",
      price: "от 40 руб/м²",
    },
  ];

  return (
    <div className="font-custom">
      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 2xl:grid-cols-3 2xl:gap-12 mt-20 2xl:ml-52 mb-20 gap-10">
        {services.map((service, index) => (
          <motion.li
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
              <figure>
                <img
                  src={isMobile ? service.mob : service.desk}
                  className="h-96 w-96 object-cover"
                  alt={service.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end flex items-center gap-2">
                  <div className="btn">{service.price}</div>
                  <NavLink to="/order" className="btn btn-primary">
                    Заказать
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default OurServices;
