import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Spin.module.css";

import f2 from "../../assets/images/objects/chameleon.png";
import f3 from "../../assets/images/objects/photo_2024-11-25_15-56-41.jpg";
import f4 from "../../assets/images/objects/twins.png";
import f5 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (3).jpg";
import f6 from "../../assets/images/objects/photo_2024-11-25_15-56-42 (4).jpg";
import f7 from "../../assets/images/objects/bcSam.png";
import f8 from "../../assets/images/objects/salo.png";
import f9 from "../../assets/images/objects/chrismasTree.png";
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
    autoplaySpeed: 4000,
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
          <img src={f2} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">БЦ хамелеон</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Промышленная мойка фасада и остекления
            </p>
          </div>
        </div>
        <div className="">
          <img src={f3} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">СО ЕЭС</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Промышленная мойка фасада и остекления
            </p>
          </div>
        </div>
        <div className="">
          <img src={f4} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">Wellton Towers</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Монтаж снегоуловителей
            </p>
          </div>
        </div>
        <div className="">
          <img src={f5} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">жк SKY HOUSE</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Промышленная мойка окон
            </p>
          </div>
        </div>
        <div className="">
          <img src={f6} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">Частный дом </p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Украшение коттеджей
            </p>
          </div>
        </div>
        <div className="">
          <img src={f7} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">БЦ Саммит</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Промышленная мойка остекления
            </p>
          </div>
        </div>
        <div className="">
          <img src={f8} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">Завод Салют</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Обеспыливание цехов
            </p>
          </div>
        </div>
        <div className="">
          <img src={f9} className={s.img} />
          <div className="  absolute bottom-2 w-screen p-1 flex flex-col bgSpinText  text-start  ">
            <p className="font-bold text-xl">Ёлка в Чите</p>
            <p className="text-md font-semibold text-wrap max-w-52">
              Сбор и украшение ёлки
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AnotherSpin;
