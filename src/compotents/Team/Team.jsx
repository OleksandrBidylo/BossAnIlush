import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full relative mb-52   p-3  font-custom shadow-2xl shadow-black py-20 px-24 rounded-xl">
      <h3 className="flex justify-center mb-16 text-3xl font-semibold">
        Наша команда
      </h3>
      <Slider {...settings}>
        <div className="flex flex-col items-center px-2  ">
          <img
            src="https://cdn.openart.ai/published/dTDFu1ONGEsJFtqRrAEn/hogwKyPE_-Ftf_1024.webp"
            className="transition-transform transform duration-300 ease-in-out "
          />
          <div className="flex flex-col text-center bg-neutral  ">
            <p className="text-center ">Илья</p> <p>опыт: 52</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/9/19/37a6995e-5b8d-451f-be64-5c7acb597c48.jpg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <div className="flex flex-col text-center bg-neutral">
            <p className="text-center">Владимир</p> <p>опыт: 52</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-2 ">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/10/20/3140761e-b2a6-4ac5-bb89-e4b24854583e.jpg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <div className="flex flex-col text-center bg-neutral">
            <p className="text-center ">Тимофей</p> <p>опыт: 52</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://miro.medium.com/v2/resize:fit:1024/1*5sBMuhDyvpQJF5vfWIUYPg.jpeg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <div className="flex flex-col text-center bg-neutral">
            <p className="text-center ">Вячеслав</p> <p>опыт: 52</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
