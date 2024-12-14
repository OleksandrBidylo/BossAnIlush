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
        <div className="px-2  ">
          <img
            src="https://mayday.rocks/wp-content/uploads/2022/05/967752.jpg"
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl "
          />
          <div className="bg-primary rounded-b-3xl text-center p-3 text-black font-semibold  ">
            <p className="font-bold text-xl">Илья</p>

            <p>Самый главный босс</p>

            <p>Опыт в промальпе: 4 года</p>
          </div>
        </div>

        <div className="px-2 ">
          <img
            src="https://st1.stranamam.ru/data/cache/2011sep/18/42/2592617_13202-650x0.jpg"
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl "
          />
          <div className="bg-primary rounded-b-3xl text-center p-3 text-black font-semibold  ">
            <p className="font-bold text-xl">Тимофей</p>

            <p>Самый серьёзный член команды</p>

            <p>Опыт в промальпе: 3 года</p>
          </div>
        </div>
        <div className="px-2  ">
          <img
            src="https://bm.img.com.ua/videoimg/18/149518.jpg"
            className="transition-transform transform duration-300 ease-in-out h-96 w-96 rounded-t-3xl "
          />
          <div className="bg-primary rounded-b-3xl text-center p-3 text-black font-semibold">
            <p className="font-bold text-xl">Владимир</p>

            <p>Главный клоун в команде</p>

            <p>Опыт в промальпе: 6 лет</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
