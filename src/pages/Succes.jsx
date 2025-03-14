import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Succes = () => {
  return (
    <div className="font-custom">
      <div className="flex flex-col-reverse justify-center items-center lg:text-4xl gap-7 mt-52 text-center">
        <span className="flex flex-wrap lg:flex-nowrap gap-2  justify-center">
          <p>Или вы можете нам позвонить</p>
          <a className="text-primary" href="tel:+79261380527">
            89261380527
          </a>
        </span>
        <NavLink className="lg:text-2xl btn" to="/">
          Вернуться на сайт
        </NavLink>
        <FaCheck className="text-9xl text-primary" />
        <p className="">Ваш заказ оформлен, мы скоро с вами свяжемся</p>
      </div>
    </div>
  );
};

export default Succes;
