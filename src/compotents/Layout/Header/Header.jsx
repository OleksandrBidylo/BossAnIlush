import { FaPhoneAlt, FaTelegram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-custom">
      <header className="bg-neutral text-neutral-content p-5 relative">
        <div className="flex items-center justify-between">
          <div className=" flex gap-5 ml-10 font-semibold text-2xl items-center">
            <NavLink className="btn text-xl btn-primary" to="/our-services">
              Наши услуги
            </NavLink>
            <a href="tel:+">+78005553535</a>
          </div>

          <NavLink to="/" className="text-4xl ">
            BossAnAlp
          </NavLink>

          <div className="text-4xl">
            <div className=" flex items-center gap-5">
              <a
                href="tel:+1111"
                className="flex items-center gap-1 btn font-bold btn-primary text-2xl"
              >
                <FaPhoneAlt />
                Позвоните нам !
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
