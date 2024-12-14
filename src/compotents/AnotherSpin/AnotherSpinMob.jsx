import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Spin.module.css";

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
    <div className="mb-36 font-custom shadow-2xl shadow-black py-10 rounded-xl">
      <h3 className="flex justify-center mb-10 text-2xl font-semibold text-center">
        Наши объекты
      </h3>
      <Slider {...settings}>
        <div className="">
          <img src="https://i.imgur.com/QqmXTb9.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/eTQeH10.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/ia4yHva.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/HsYFUO8.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/4lJUm6Q.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/jlcQWoE.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/cUukqMb.jpeg" className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/l87LvTO.jpeg " className={s.img} />
        </div>
        <div className="">
          <img src="https://i.imgur.com/8iBvguo.jpeg " className={s.img} />
        </div>
      </Slider>
    </div>
  );
};

export default AnotherSpin;
