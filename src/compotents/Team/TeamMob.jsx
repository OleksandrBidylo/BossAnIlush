import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Spin.module.css";

import Slider from "react-slick";
import iluha from "../../assets/images/team/Screenshot_2025_01_13_06_56_20_65_92460851df6f172a4592fca41cc2d2e6.jpg";
import vova from "../../assets/images/team/IMG20250113114704.jpg";
import dima from "../../assets/images/team/IMG20250113093837.jpg";
import slava from "../../assets/images/team/IMG20250113114457.jpg";
import timowa from "../../assets/images/team/IMG20250112110000.jpg";

const TeamMob = () => {
  const settings = {
    className: "center",

    infinite: true,
    dots: true,
    dotsClass: "slider-dots",
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
    <div className="mb-36 font-custom shadow-2xl shadow-black py-10 rounded-xl ">
      <h3 className="flex justify-center mb-10 text-2xl font-semibold text-center">
        Наша команда
      </h3>
      <Slider {...settings} className="pt-10">
        <div className="ml-10">
          <img src={timowa} className={s.img} />
          <div className="pdd bg-gray-800 rounded-b-3xl text-center p-1  font-semibold">
            <p className="font-bold text-lg text-primary">Тимофей</p>

            <p>Опыт в промальпе: 3 года</p>
          </div>
        </div>
        <div className="ml-10">
          <img src={iluha} className={s.img} />
          <div className="pdd bg-gray-800 rounded-b-3xl text-center p-1  font-semibold">
            <p className="font-bold text-lg text-primary">Илья</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>

        <div className="ml-10">
          <img src={dima} className={s.img} />
          <div className="pdd bg-gray-800 rounded-b-3xl text-center p-1  font-semibold">
            <p className="font-bold text-lg text-primary">Дмитрий</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>

        <div className="ml-10">
          <img src={vova} className={s.img} />
          <div className="pdd bg-gray-800 rounded-b-3xl text-center p-1  font-semibold">
            <p className="font-bold text-lg text-primary">Владимир</p>

            <p>Опыт в промальпе: 6 лет</p>
          </div>
        </div>
        <div className="ml-10">
          <img src={slava} className={s.img} />
          <div className="pdd bg-gray-800 rounded-b-3xl text-center p-1  font-semibold">
            <p className="font-bold text-lg text-primary">Вячеслав</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TeamMob;
