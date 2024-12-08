import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const AnotherSpin = () => {
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
    <div className="w-full relative mb-52 font-custom shadow-2xl shadow-black py-10 px-24 rounded-xl max-w-screen-lg">
      <h3 className="flex justify-center mb-10 text-2xl font-semibold text-center">
        Пример объектов
      </h3>
      <Slider {...settings}>
        <div className="flex flex-col items-center px-2 ">
          <img
            src="https://i.imgur.com/QqmXTb9.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/eTQeH10.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/ia4yHva.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/HsYFUO8.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/4lJUm6Q.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/jlcQWoE.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/cUukqMb.jpeg"
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/l87LvTO.jpeg "
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            src="https://i.imgur.com/8iBvguo.jpeg "
            className="transition-transform transform duration-300 ease-in-out h-32 w-52"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AnotherSpin;
