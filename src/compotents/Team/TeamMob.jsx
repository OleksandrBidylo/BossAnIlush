import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Spin.module.css";

import Slider from "react-slick";

const TeamMob = () => {
  const settings = {
    className: "center",

    infinite: true,

    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="mb-36 font-custom shadow-2xl shadow-black py-10 rounded-xl">
      <h3 className="flex justify-center mb-10 text-xl font-semibold text-center">
        Наша команда
      </h3>
      <Slider {...settings}>
        <div className="ml-10">
          <img
            src="https://st1.stranamam.ru/data/cache/2011sep/18/42/2592617_13202-650x0.jpg"
            className={s.img}
          />
          <div className="pdd bg-primary rounded-b-3xl text-center p-1 text-black font-semibold">
            <p className="font-bold text-lg">Тимофей</p>
            <p>Самый серьёзный член команды</p>

            <p>Опыт в промальпе: 3 года</p>
          </div>
        </div>
        <div className="ml-10">
          <img
            src="https://mayday.rocks/wp-content/uploads/2022/05/967752.jpg"
            className={s.img}
          />
          <div className="pdd bg-primary rounded-b-3xl text-center p-1 text-black font-semibold">
            <p className="font-bold text-lg">Илья</p>
            <p>Самый главный босс</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>
        <div className="ml-10">
          <img
            src="https://bm.img.com.ua/videoimg/18/149518.jpg"
            className={s.img}
          />
          <div className="pdd bg-primary rounded-b-3xl text-center p-1 text-black font-semibold">
            <p className="font-bold text-lg">Владимир</p>
            <p>Главный клоун в команде</p>

            <p>Опыт в промальпе: 6 лет</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TeamMob;
