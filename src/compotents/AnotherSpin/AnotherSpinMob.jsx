import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Spin.module.css";
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

const AnotherSpin = () => {
  const settings = {
    className: "center",
    dots: true,
    dotsClass: "slider-dots-obj",
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
    <div className="mb-36 font-custom shadow-2xl shadow-black py-10 rounded-xl mt-36">
      <h3 className="flex justify-center mb-5 text-2xl font-semibold text-center">
        Наши объекты
      </h3>
      <Slider {...settings}>
        <div className="">
          <img src={f1} className={s.img} />
        </div>
        <div className="">
          <img src={f2} className={s.img} />
        </div>
        <div className="">
          <img src={f3} className={s.img} />
        </div>
        <div className="">
          <img src={f4} className={s.img} />
        </div>
        <div className="">
          <img src={f5} className={s.img} />
        </div>
        <div className="">
          <img src={f6} className={s.img} />
        </div>
        <div className="">
          <img src={f7} className={s.img} />
        </div>
        <div className="">
          <img src={f8} className={s.img} />
        </div>
        <div className="">
          <img src={f9} className={s.img} />
        </div>
      </Slider>
    </div>
  );
};

export default AnotherSpin;
