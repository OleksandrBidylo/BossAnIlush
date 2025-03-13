import { motion } from "framer-motion";
import chastnaya from "../assets/images/services/vovaVes.jpg";
import fasad from "../assets/images/services/fasad.jpg";
import mha from "../assets/images/services/mha.jpg";
import sneg from "../assets/images/services/sneg.jpg";
import sosulki from "../assets/images/services/sosulki.jpg";
import ukrashenia from "../assets/images/services/ukrashenie.jpg";
import vodostok from "../assets/images/services/vodostok.jpg";
import prom from "../assets/images/services/prom.jpg";
import { NavLink } from "react-router-dom";

const OurServices = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-custom">
      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 2xl:grid-cols-3 2xl:gap-12 mt-20 2xl:ml-52 mb-20 gap-10">
        {[
          {
            img: prom,
            title: "Промышленная мойка окон",
            description:
              "Включает комплексные услуги по очистке окон промышленных зданий с использованием специализированного оборудования и эффективных методов для достижения высокого качества результата.",
            price: "от 20 руб/м²",
          },
          {
            img: fasad,
            title: "Частная мойка окон",
            description:
              "Предусматривает услуги по профессиональной очистке окон в жилых домах, квартирах и на дачах с учетом особенностей каждого объекта для обеспечения чистоты и комфорта.",
            price: "цена договорная",
          },
          {
            img: chastnaya,
            title: "Мойка фасада",
            description:
              "Осуществляется тщательная очистка наружных стен зданий от различных видов загрязнений с применением современных технологий для поддержания презентабельного внешнего вида.",
            price: "от 20 руб/м²",
          },
          {
            img: ukrashenia,
            title: "Украшение коттеджей",
            description:
              "Предлагаются услуги по оформлению и декорированию внешнего вида частного дома, что придает индивидуальность и эстетическую привлекательность зданию.",
            price: "цена договорная",
          },
          {
            img: mha,
            title: "Очистка кровли от мха",
            description:
              "Включает удаление мха, лишайников и других растений с крыши, что помогает предотвратить их разрушительное воздействие на материалы покрытия.",
            price: "50 руб/м²",
          },
          {
            img: sneg,
            title: "Очистка кровли от снега и наледи",
            description:
              "Предусматривает комплексные услуги по безопасному удалению снежных и ледяных отложений с крыши для предотвращения повреждений и протечек.",
            price: "от 25 руб/м²",
          },
          {
            img: vodostok,
            title: "Подготовка водостоков к зиме",
            description:
              "Включает очистку и профилактическую обработку водостоков для предотвращения замерзания воды и образования ледяных пробок в зимний период.",
            price: "от 350 руб/шт",
          },
          {
            img: sosulki,
            title: "Удаление сосулек",
            description:
              "Предлагаются услуги по эффективному удалению наледи и сосулек с крыш и водостоков для обеспечения безопасности и предотвращения возможных повреждений.",
            price: "от 40 руб/м²",
          },
        ].map((service, index) => (
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
                  src={service.img}
                  className="h-96 w-96"
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
