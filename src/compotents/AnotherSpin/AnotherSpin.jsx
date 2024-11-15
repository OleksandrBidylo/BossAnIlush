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

const AnotherSpinMob = () => {
  const settings = {
    className: "center",
    centerMode: true,
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
        Пример объектов
      </h3>
      <Slider {...settings}>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://outsignal.com/edit/uploads/page/106/5bb365b1347b6.jpg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <p className="text-center bg-neutral">Ашан</p>
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://outsignal.com/edit/uploads/page/106/5bb365b1347b6.jpg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <p className="text-center bg-neutral">Гошан</p>
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://outsignal.com/edit/uploads/page/106/5bb365b1347b6.jpg"
            className="transition-transform transform duration-300 ease-in-out"
          />
          <p className="text-center bg-neutral">Рошан</p>
        </div>
        {/* Добавьте дополнительные слайды здесь */}
      </Slider>
    </div>
  );
};

export default AnotherSpinMob;
