import { FaPhoneAlt, FaTelegram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-custom">
      <header className="bg-neutral text-neutral-content  relative p-3 2xl:p-5">
        <div className="flex items-center justify-between">
          <div className=" flex 2xl:gap-5 2xl:ml-10 2xl:font-semibold 2xl:text-2xl items-center">
            <NavLink
              className="hidden 2xl:flex btn text-xl btn-primary"
              to="/our-services"
            >
              Наши услуги
            </NavLink>
            <a className="hidden 2xl:flex" href="tel:+">
              +78005553535
            </a>
          </div>

          <NavLink to="/" className="text-xl 2xl:text-4xl 2xl:ml-72 ">
            BossAnAlp
          </NavLink>

          <div>
            <NavLink className="flex text-2xl 2xl:hidden" to="bg-m">
              <GiHamburgerMenu />
            </NavLink>
          </div>

          <div className="hidden 2xl:flex  text-4xl">
            <div className=" flex items-center gap-5">
              <NavLink
                to="/contact-us"
                className="flex items-center gap-1 btn font-bold btn-primary text-2xl"
              >
                <FaPhoneAlt />
                Свяжитесь с нами !
              </NavLink>
              <div className="flex gap-5 mr-10">
                <a className="btn text-3xl " href="http://" target="_blank">
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
