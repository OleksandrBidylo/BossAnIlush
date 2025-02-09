import { FaPhoneAlt, FaTelegram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/head_transparent_Craiyon.png";

const Header = () => {
  return (
    <div className="font-custom">
      <header className="bg-neutral text-neutral-content  relative p-3 2xl:p-5 ">
        <div className="flex items-center justify-between  max-h-14 ">
          <div className="hidden 2xl:flex 2xl:gap-5 2xl:ml-10 2xl:font-semibold 2xl:text-2xl items-center">
            <NavLink
              to="/contact-us"
              className="flex items-center gap-1 btn font-bold btn-primary text-2xl"
            >
              <FaPhoneAlt />
              Свяжитесь с нами !
            </NavLink>
            <a className="hidden 2xl:flex" href="tel:+79261380527">
              +79261380527
            </a>
          </div>

          <NavLink to="/" className=" pl-3     2xl:pl-0   flex  items-center">
            <img src={logo} width="70" />
            <p className="text-4xl font-bold">BossAnAlp</p>
          </NavLink>

          <div>
            <NavLink className="flex text-2xl 2xl:hidden" to="bg-m">
              <GiHamburgerMenu />
            </NavLink>
          </div>

          <div className="hidden 2xl:flex  text-4xl">
            <div className=" flex items-center gap-5">
              <div className="text-2xl font-bold text-center ">
                <div>
                  <p className="text-primary">08:00-00:00</p>
                </div>
                <p className="text-lg">Приём заказов</p>
              </div>
              <div className="flex gap-5 mr-10">
                <a
                  className="btn text-3xl "
                  href="https://t.me/b0ssanalp"
                  target="_blank"
                >
                  <FaTelegram />
                </a>
                <a
                  className="btn text-3xl"
                  href="https://www.youtube.com/@BossAnAlp"
                  target="_blank"
                >
                  <FaYoutube className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
