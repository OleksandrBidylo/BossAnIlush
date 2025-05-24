import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iluha from "../../assets/images/team/iluhaComp.jpg";
import vova from "../../assets/images/team/vovaDesk.jpg";
import dima from "../../assets/images/team/dimaDesk.jpg";
import slava from "../../assets/images/team/slavaDesk.jpg";
import timowa from "../../assets/images/team/timoshaDesk.jpg";

import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// Кастомная левая стрелка
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FaLongArrowAltLeft />
    </button>
  );
};

// Кастомная правая стрелка
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      <FaLongArrowAltRight />
    </button>
  );
};

const Team = () => {
  const settings = {
    dots: true,
    dotsClass: "slider-dots-desk",
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full relative mb-52 font-custom shadow-2xl shadow-black py-20 px-24 rounded-xl ">
      <h3 className="flex justify-center mb-16 text-3xl font-semibold">
        Наша команда
      </h3>
      <Slider {...settings}>
        <div className="px-4    ">
          <img
            src={iluha}
            className=" transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl mt-12 "
          />
          <div className=" rounded-b-3xl text-center p-3  font-semibold  mb-12  bg-gray-800 ">
            <p className="font-bold text-xl text-primary">Илья</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>
        <div className="px-4    ">
          <img
            src={dima}
            className=" transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl mt-12 "
          />
          <div className=" rounded-b-3xl text-center p-3  font-semibold  mb-12  bg-gray-800 ">
            <p className="font-bold text-xl text-primary">Дмитрий</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>

        <div className="px-4 ">
          <img
            src={timowa}
            className=" transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl mt-12 "
          />
          <div className="  rounded-b-3xl text-center p-3  font-semibold  mb-12 bg-gray-800 ">
            <p className="font-bold text-xl text-primary">Тимофей</p>

            <p>Опыт в промальпе: 3 года</p>
          </div>
        </div>
        <div className="px-4  ">
          <img
            src={vova}
            className="  transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl mt-12  "
          />
          <div className="                 rounded-b-3xl text-center p-3  font-semibold  mb-12 bg-gray-800">
            <p className="font-bold text-xl text-primary">Владимир</p>

            <p>Опыт в промальпе: 6 лет</p>
          </div>
        </div>
        <div className="px-4  ">
          <img
            src={slava}
            className="  transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl mt-12  "
          />
          <div className="                 rounded-b-3xl text-center p-3  font-semibold  mb-12 bg-gray-800">
            <p className="font-bold text-xl text-primary">Вячеслав</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
