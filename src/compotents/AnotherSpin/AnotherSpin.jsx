import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import f1 from "../../assets/images/objects/photo_2024-11-25_15-56-41 (2).jpg";
import f2 from "../../assets/images/objects/photo_2024-11-25_15-56-41 (3).jpg";
import f3 from "../../assets/images/objects/photo_2024-11-25_15-56-41.jpg";
import f4 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (2).jpg";
import f5 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (3).jpg";
import f6 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (4).jpg";
import f7 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (5).jpg";
import f8 from "../../assets/images/objects/photo_2024-11-25_15-56-42.jpg";
import f9 from "../../assets/images/objects/photo_2024-12-03_18-00-58.jpg";

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
    dots: true,
    dotsClass: "slider-dots-obj-desk",
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
    <div className="w-full relative mb-52 font-custom shadow-2xl shadow-black py-20 px-24 rounded-xl mt-52">
      <h3 className="flex justify-center mb-16 text-3xl font-semibold">
        Наши объекты
      </h3>
      <Slider {...settings}>
        <div className="px-2">
          <img
            src={f1}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className=" px-2">
          <img
            src={f2}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f3}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f4}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f5}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f6}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f7}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f8}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
        <div className="px-2">
          <img
            src={f9}
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-3xl"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AnotherSpinMob;
