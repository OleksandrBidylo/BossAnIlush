import { FaPhoneAlt, FaTelegram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-custom">
      <header className="bg-neutral text-neutral-content  relative p-3 lg:p-5">
        <div className="flex items-center justify-between">
          <div className=" flex lg:gap-5 lg:ml-10 lg:font-semibold lg:text-2xl items-center">
            <NavLink
              className="hidden lg:flex btn text-xl btn-primary"
              to="/our-services"
            >
              Наши услуги
            </NavLink>
            <a className="hidden lg:flex" href="tel:+">
              +78005553535
            </a>
          </div>

          <NavLink to="/" className="text-xl lg:text-4xl lg:ml-72 ">
            BossAnAlp
          </NavLink>

          <div>
            <NavLink className="flex text-2xl lg:hidden" to="bg-m">
              <GiHamburgerMenu />
            </NavLink>
          </div>

          <div className="hidden lg:flex  text-4xl">
            <div className=" flex items-center gap-5">
              <a
                href="tel:+1111"
                className="flex items-center gap-1 btn font-bold btn-primary text-2xl"
              >
                <FaPhoneAlt />
                Свяжитесь с нами !
              </a>
              <div className="flex gap-5 mr-10">
                <a className="btn text-3xl " href="http://" target="_blank">
                  <FaTelegram />
                </a>
                <a className="btn text-3xl" href="http://" target="_blank">
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
